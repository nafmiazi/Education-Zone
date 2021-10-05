import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';
import '../Footer/Footer.css';
import logo from '../../logo.png'

const Header = () => {

    // Display Header section
    return (
        // <div className="nav bg-black d-flex justify-content-between align-items-center sticky-top">
            <div className="row lh-md-lg m-0 sticky-top py-3 navigation">
                <div className="col-lg-4 d-flex align-items-center text-start">
                    <img className="ms-md-2" src={logo} alt="" />
                    <h2 className="ms-md-2 mt-2 text-white"><span className="text-warning">Education</span> Zone</h2>
                </div>

                {/* Set Rout */}
                <nav className="col-lg-5 d-flex align-items-center ps-md-5">
                    <NavLink className="nav-link" to="/home">Home</NavLink>
                    <NavLink className="nav-link" to="/courses">Courses</NavLink>
                    <NavLink className="nav-link" to="/about">About Us</NavLink>
                    <NavLink className="nav-link" to="/others">Others</NavLink>
                </nav>

                <div className="col-lg-3 d-flex justify-content-lg-center align-items-center  ps-5 ms-lg-0 ">
                    <button className="btn btn-warning me-2">Login</button>
                    <button className="btn btn-primary">Register</button>
                </div>
            </div>
        // </div>
    );
};

export default Header;