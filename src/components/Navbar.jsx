import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import navLogo from '/Logo.png';
import hamburger from '../assets/hamburger.svg';
import close from '../assets/close.svg';

import './Navbar.css';

const LoginComponent = ({ isOpen }) => {
  return (
    <div>
      {isOpen ? (
        <p className="login-text">
            Existing customer?
            <Link to="/login" className="nav__button-link">
                Login
            </Link>
        </p>
      ) : (
        <Link to="/login" className='nav__button-link'>Login</Link>
      )}
    </div>
  );
};

LoginComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleNavbar = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    let handleDocumentClick = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleDocumentClick);

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  });

  return (
    <header className='header'>
      <nav className='nav container'>
        <Link to="/">
          <img src={navLogo} className={`nav__logo ${isOpen ? 'nav__logo--overlay' : ''}`} alt="Nav logo" />
        </Link>
        {/* <div className={`overlay ${isOpen ? 'active' : ''}`} > */}
          <div className={`nav__menu ${isOpen ? 'show-menu' : ''}`} ref={menuRef}>
            <ul className='nav__list'>
              {['Product', 'Features', 'Marketplace', 'Company'].map((text) => (
                <li key={text} className='nav__item'>
                  <Link to={`/${text.toLowerCase()}`} className='nav__link'>{text}</Link>
                </li>
              ))}
            </ul>

            <div className='nav__buttons'>
              <Link to="/trial" className='nav__button--purple'>Start free trial</Link>
              <LoginComponent isOpen={isOpen} />
            </div>

            {isOpen && <button className="nav__close" onClick={toggleNavbar}>
              <img src={close} alt="close" />
            </button>}
          </div>
        {/* </div> */}


        <button className='nav__toggle' onClick={toggleNavbar}>
          <img src={hamburger} alt="hamburger" />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
