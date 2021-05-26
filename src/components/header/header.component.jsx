import React from 'react';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import {createStructuredSelector} from 'reselect';

import {auth} from '../../fireabase/firebase.utils';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';

import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selector'


const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
                {
                    currentUser ?
                    <OptionLink as='div'  onClick={()=>auth.signOut()}>SALIR</OptionLink>
                    :
                    <OptionLink  to='/signin'>AUTENTICARSE</OptionLink>
                }
                <CartIcon />
        </OptionsContainer>
        { hidden?null:<CartDropDown /> }
       
    </HeaderContainer>
)
const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);