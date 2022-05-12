import { Fragment } from 'react';
import './header.styles.scss';

const Header = () => {
return(
    <Fragment>
    <div className="header-container">
        <img className='comic-header' src='http://www.fwpodcasts.com/ma/FWTeamUp/header-FWTeamUp.jpg'></img>
    <div className='header-items'>
        <ul>
            <li><h2>FREE SHIPPING</h2>
            Free shipping for items above 20 OMR
            </li>
            <li><h2>30 DAYS return</h2>
            Simply return it within 30 days for an exchange
            </li>
            
            <li><h2>100% PAYMENT SECURE</h2>
            Payment is 100% secure 
            </li>
        </ul>
    </div>
    </div>
    </Fragment>
)
}

export default Header;