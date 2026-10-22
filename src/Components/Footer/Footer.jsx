import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaLocationArrow, FaPhone, FaAt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer__container">
          <ul className='footer__list'>
            
            <li className='footer-item footer-item--about'>
              <h1 className='footer__title'>
                Flower <span className="highlight">Shop</span>
              </h1>
              <p className='footer__desc'>
                Some random stuff about flower shop and some more info cuz this box had to get fill. 
                Some random stuff about flower shop and some more info cuz this box had to get fill.
              </p>
            </li>

            <li className='footer-item'>
              <h2 className='footer__subtitle'>Links</h2>
              <div className="footer__links-group">
                <Link to="/" className='footer__link'>Home</Link>
                <Link to="/about" className='footer__link'>About</Link>
                <Link to="/shop" className='footer__link'>Shop</Link>
                <Link to="/login" className='footer__link'>Login</Link>
              </div>
            </li>

            <li className='footer-item'>
              <h2 className='footer__subtitle'>Contact</h2>
              <div className="footer__links-group">
                <Link to="#" className='footer__link footer__link--contact'>
                  <FaLocationArrow className='footer__icon' />
                  <span>26985 Brighton Lane, Lake Forest, CA</span>
                </Link>
                <Link to="#" className='footer__link footer__link--contact'>
                  <FaAt className='footer__icon' />
                  <span>support@Flowers.com</span>
                </Link>
                <Link to="#" className='footer__link footer__link--contact'>
                  <FaPhone className='footer__icon' />
                  <span>+1 236 5489</span>
                </Link>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer