import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext} from 'react';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import './navigation.styles.scss';
import { UserContext } from '../../contexts/user.context';
import { CartContext, CartProvider } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import SearchBar from '../../components/search-bar/search-bar.component';


const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container"> 
    <Link  className="navbar-brand" to='/'>ComixManga</Link>

    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className="nav-link-shop" to='/shop'>SHOP</Link>
        </li>
      </ul>

      <div className='nav-search-bar'>
        <SearchBar />
      </div>

      <div className='nav-links-container'>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>SIGN OUT</span> )
             :(
        <Link className='nav-link-sign-in' to='/auth'>
           SIGN IN
        </Link>
          )}
          <CartIcon />
          </div>
          {isCartOpen && <CartDropdown />}
    </div>
  </div>
  </nav>
        <Outlet />
        </Fragment>

    );
};

export default Navigation;