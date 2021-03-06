import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import {auth} from '../../fireabase/firebase.utils';
import './header.styles.scss';
import { connect } from 'react-redux';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to="/shop">
                SHOP
            </Link>
            <Link className='option' to="/shop">
                CONTACT
            </Link>
                {
                    currentUser ?
                    <div className='option' onClick={()=>auth.signOut()}>SALIR</div>
                    :
                    <Link className='option' to='/signin'>AUTENTICARSE</Link>
                }
                <CartIcon />
        </div>
        { hidden?null:<CartDropDown /> }
       
    </div>
)
const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => ({
    currentUser, hidden
})

export default connect(mapStateToProps)(Header);