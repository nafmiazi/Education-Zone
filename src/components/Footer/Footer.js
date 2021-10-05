import React from 'react';
import './Footer.css';
import logo from '../../logo.png'

const Footer = () => {
    // Display Footer section
    return (
        <div className="row custom-footer text-white m-0 p-5 pb-3">
            <div className="col-lg-5 text-start p-3 pt-2 border-end">
                <img src={logo} alt="" />
                <h2 className="mb-4"><span className="text-warning">Education</span> Zone</h2>
                <p className="mb-4">We are providing high-quality offline courses for about ten years. Our all instructors expert and highly experienced. We provide all kinds of course materials to our students.</p>
                <h6>Follow Us On</h6>
                <div>
                    <i className="fab fa-facebook-f me-3 text-warning"></i>
                    <i className="fab fa-twitter me-3 text-warning"></i>
                    <i className="fab fa-linkedin-in me-3 text-warning"></i>
                    <i className="fab fa-pinterest-p me-3 text-warning"></i>
                    <i className="fab fa-instagram text-warning"></i>
                </div>
            </div>
            <div className="col-lg-3 text-start text-md-center">
                <h4 className="custom-color mb-4">Categories</h4>
                <p>Primary School Certificate</p>
                <p>Junior School Certificate</p>
                <p>Junior Dakhil Certificate</p>
                <p>Secondary School Certificate</p>
                <p>Higher Secondary School Certificate</p>
                <p>Other Programmes</p>
            </div>
            <div className="col-lg-4 text-start text-md-end border-start">
                <h4 className="custom-color mb-4">Contact Us</h4>
                <h6 className="lh-lg"> 250/A CDA Avenue, Agrabad, Chattogram.<i className="fas fa-map-marker-alt ms-3 custom-color"></i></h6>
                <h6 className="lh-lg"> naf71bd@gmail.com <i className="fas fa-envelope ms-3 custom-color"></i></h6>
                <h6 className="lh-lg"> +88 012345 6789 <i className="fas fa-phone-alt ms-3 custom-color"></i></h6>
                <h6 className="mt-3 custom-color">Feel free to contact with us</h6>
            </div>
            <h6 className="mt-5 ms-md-5 text-center">Copyright <i className="far fa-copyright"></i> 2021 Nurul Afsar Fahim</h6>
        </div>
    );
};

export default Footer;