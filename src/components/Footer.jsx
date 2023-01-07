import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Library.svg'

const Footer = () => {
    return (
       <footer>
        <div className="container">
            <div className="row row__column">
           <Link to="/">
            <figure className='footer__logo'>
                <img className='footer__logo--img' src={Logo} alt="" />
            </figure>
           </Link>
           <footer className='footer__list'>
            <Link to className='footer__link' href="/">Home</Link>
            <span className='footer__link no-cursor'>About</span>
            <Link to="/books" className='footer__link'>Books</Link>
            <Link to="/cart" className='footer__link'>Cart</Link>
           </footer>
           <div className="footer__copyright">
            Copyright &copy; 2022 Library
           </div>
            </div>
        </div>
       </footer>
    );
}

export default Footer;
