import React from 'react';
import './About.css'
import about from '../../about.jpg';

const About = () => {
    // Return About description
    return (
        <div className="row bg-light m-0 my-5">
            <div className="col-lg-6 p-5">
                <img src={about} alt="" className="w-100" />
            </div>
            <div className="col-lg-6 p-5 text-start about-section">
                <h5 className="custom-color fw-bold">ABOUT US</h5>
                <h2 className="mb-4 fw-bold">We Are Providing The Best Quality Offline Education</h2>
                <p className="text-muted">Education Zone is Bangladesh's driving offline coaching organization which empowers understudies to learn LIVE with a portion of Bangladesh's best-curated instructors. It has some 200+ educators who have shown more than 1 Million hours to 40,000+ understudies spread crosswise over 1000+ urban communities from 30+ nations. Education Zone is established by IITian companions who have been educators themselves with more than 13 years of showing background and having instructed more than 10,000 understudies.</p>
                <p className="text-muted">We are providing high-quality offline courses for about ten years. Our all instructors expert and highly experienced. We provide all kinds of course materials to our students.</p>
            </div>
        </div>
    );
};

export default About;