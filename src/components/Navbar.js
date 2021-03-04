import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    // Hooks
    const [click, setClick] = useState(false);

    // Handle functions
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <div className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        YRN <i class="fab fa-pied-piper"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {/* Si click es true, poner una clase, si no, poner la otra. */}
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-element'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-element'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-element'>
                            <Link to='/sign-ip' className='nav-links' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;