import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';
import '../Footer/Footer.css';

const Header = () => {

    // Display Header section
    return (
        <div className="nav bg-black d-flex justify-content-between align-items-center sticky-top">
            <div>
                
                <h2 className="ms-4 text-white"><span className="custom-color">Education</span> Zone</h2>
            </div>

            {/* Set Rout */}
            <nav className="d-flex me-5">
                <NavLink className="nav-link" to="/home">Home</NavLink>
                <NavLink className="nav-link" to="/courses">Courses</NavLink>
                <NavLink className="nav-link" to="/about">About Us</NavLink>
                <NavLink className="nav-link" to="/others">Others</NavLink>
            </nav>
        </div>
    );
};

export default Header;