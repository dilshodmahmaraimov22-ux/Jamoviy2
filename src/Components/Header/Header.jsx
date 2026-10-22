import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import human from '../Images/human.png'
import shop from '../Images/shop.png'
import './Header.css'

const Header = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        navigate("/")
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

  return (
    <>
    <div className="header">
        <div className="container">
            <div className="header__container">
                <h1 className='header__title'>Flower Shop</h1>

                <div
                    className={`header__burger ${menuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`header__list ${menuOpen ? 'header__list--open' : ''}`}>
                    <li className='header__item'>
                        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                        <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
                        <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
                    </li>
                    <li className='header__item'>
                        <img className='header__img' src={human} alt="surat" />
                        <img className='header__img' src={shop} alt="surat" />
                        <button onClick={handleLogout} className='header__btnn'>Logout</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header