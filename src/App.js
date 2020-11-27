import React from 'react';
import { Route,Switch, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';


import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/signin-and-singup/signin-and-singup.component';
import { auth,createUserProfileDocument } from './fireabase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';



class App extends React.Component {
  unsubscribeFromAuth = null;
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      const { setCurrentUser } = this.props;
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
         setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
        });
      }else{
        setCurrentUser(userAuth);
      }
      
    })
  }

  render() {
    return(
        <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" 
            render={()=>
                    this.props.currentUser?(
                      <Redirect to='/' />
                    ):(
                      <SignInAndSignUp/>
                    )
                  } 
          />
        </Switch>
        </div>
      );
  }
}
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})
const mapDispatchProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))

})
export default connect(mapStateToProps,mapDispatchProps)(App);
