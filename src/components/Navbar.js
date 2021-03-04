import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        YRN <i class="fab fa-pied-piper"></i>
                    </Link>
                    <div className="menu-icon">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;