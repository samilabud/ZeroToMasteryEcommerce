import React, {useEffect, lazy, Suspense } from 'react';

import { Route,Switch, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import GlobalStyle from './global.styles';


import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary  from './components/error-boundary/error-boundary.component';

//Lazy loading //Incrementing Performance of chunks files
const HomePage = lazy(()=>import('./pages/homepage/homepage.component'));
const ShopPage = lazy(()=>import('./pages/shop/shop.component'));
const CheckoutPage = lazy(()=>import('./pages/checkout/checkout.component'));
const SignInAndSignUp = lazy(()=>import('./pages/signin-and-singup/signin-and-singup.component'));

const App=({checkUserSession,currentUser})=>{
  useEffect(()=>{
   checkUserSession();
  },[checkUserSession])

  return(
      <div>
      <GlobalStyle />
     
      <Switch>
      <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Header/>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route exact path="/signin" 
              render={()=>
                      currentUser?(
                        <Redirect to='/' />
                      ):(
                        <SignInAndSignUp/>
                      )
                    } 
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      </div>
    );
}
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
