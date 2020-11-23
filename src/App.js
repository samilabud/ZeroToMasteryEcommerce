import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import { Route,Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import SignInAndSingUp from './pages/signin-and-singup/signin-and-singup.component';
import { auth,createUserProfileDocument } from './fireabase/firebase.utils';
import './App.css';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      //this.setState({currentUser:user});
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          }, ()=>{
            console.log(this.state);
          });
        });
      }else{
        this.setState({currentUser: userAuth});
      }
      
    })
  }

  render() {
    return(
        <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSingUp} />
        </Switch>
        </div>
      );
  }
}

export default App;
