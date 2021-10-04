import React from 'react';
import './Footer.css'

const Footer = () => {
    // Display Footer section
    return (
        <div className="row bg-black text-white m-0 p-5">
            <div className="col-lg-5 text-start p-3 border-end">
                <h2 className="mb-4"><span className="custom-color">Education</span> Zone</h2>
                <p className="mb-4">We are providing high-quality online courses for about ten years. Our all instructors expert and highly experienced. We provide all kinds of course materials to our students</p>
                <h6>Follow Us</h6>
                <div>
                    <i className="fab fa-facebook-f me-3 custom-color"></i>
                    <i className="fab fa-twitter me-3 custom-color"></i>
                    <i className="fab fa-linkedin-in me-3 custom-color"></i>
                    <i className="fab fa-pinterest-p me-3 custom-color"></i>
                    <i className="fab fa-instagram custom-color"></i>
                </div>
            </div>
            <div className="col-lg-3 pe-5 text-end">
                <h4 className="custom-color mb-4">Categories</h4>
                <p>Primary</p>
                <p>Junior</p>
                <p>Secondary</p>
                <p>Higher Secondary</p>
                <p>Others</p>
            </div>
            <div className="col-lg-4 text-end border-start">
                <h4 className="custom-color mb-4">Contact Us</h4>
                <h6 className="lh-lg"> 250/A CDA Avenue, Agrabad, Chattogram.<i className="fas fa-map-marker-alt ms-3 custom-color"></i></h6>
                <h6 className="lh-lg"> naf71bd@gmail.com <i className="fas fa-envelope ms-3 custom-color"></i></h6>
                <h6 className="lh-lg"> +88 012345 6789 <i className="fas fa-phone-alt ms-3 custom-color"></i></h6>
                <h6 className="mt-3 custom-color">Feel free to contact with us</h6>
            </div>
        </div>
    );
};

export default Footer;