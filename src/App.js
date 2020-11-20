import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import { Route,Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import SignInAndSingUp from './pages/signin-and-singup/signin-and-singup.component';
import { auth } from './fireabase/firebase.utils';
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
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
