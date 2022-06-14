import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Fragment} from 'react';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import './navigation.styles.scss';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';


const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser =  useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container"> 
    <Link  className="navbar-brand" to='/'>ComixManga</Link>
        
      <div className='nav-links-container'>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>SIGN OUT</span> )
             :(
        <Link className='nav-link-sign-in' to='/sign-in-auth'>
           SIGN IN
        </Link>
          )}
          <CartIcon />
          </div>
          {isCartOpen && <CartDropdown />}
    
  </div>
  </nav>
        <Outlet />
        </Fragment>

    );
};

export default Navigation;