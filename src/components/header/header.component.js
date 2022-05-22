import { Fragment } from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';

const Header = () => {
return(
    <Fragment>
    <div className="header-container">
        <img className='header-img' src='https://wallpapercave.com/wp/G3XZ1A1.jpg'></img>
        <h1 className='header-h1'>Welcome to ComixManga!</h1>
        <p className='header-p'>Your friendly online shop that sell comics,manga & figures in oman</p>
        <Link to= '/shop'>
        <button className='btn'>SHOP NOW!</button>
        </Link>
    </div>
    </Fragment>
)
}

export default Header;