import React, { useEffect, useState } from 'react';
import './Others.css';
import instructor from '../../instructor.jpg';
import '../Footer/Footer.css';
import '../Home/Home.css';
import Instructor from '../Instructor/Instructor';
import { Link } from 'react-router-dom';

const Others = () => {

    // Declare state and load data
    const [instructors, setInstructor] = useState([]);
    useEffect( () => {
        fetch('./instructor.JSON')
        .then(res => res.json())
        .then(data => setInstructor(data))
    }, [])

    // Display Others section
    return (
        <div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-lg-6 p-3 img-border">
                        <img src={instructor} className="w-100" alt="" />
                    </div>
                    <div className="col-lg-6 offer-section text-white text-start">
                        <h5 className="custom-color fw-bold">LIMITED TIME OFFER</h5>
                        <h2 className="mb-4 fw-bold">50% Discount On All Of Our New and Upcoming Courses</h2>
                        <p>CAO offers come out after the Leaving Cert results have been released. Once you have calculated your points, it is time to play the waiting game and wait for your CAO offers. Based on your points, you will be offered a place on one of the courses you have put down on your CAO. It will then be up to you whether you want to accept it or turn it down. </p>
                        <Link to="/courses">
                            <button className="btn btn-lg btn-find-course text-white my-5">Enrole Now</button>
                        </Link>
                        
                    </div>
                </div>

                <div className="row my-5 subscribe-section text-white p-5">
                    <div className="col-lg-6">
                        <h1>Subscribe Our Newsletter</h1>
                    </div>
                    <div className="col-lg-6">
                        <div className="input-group mt-1">
                            <input type="text" className="form-control" placeholder="Your Email Address" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-find-course text-white" type="button" id="button-addon2">Subscribe</button>
                        </div>
                    </div>
                </div>

                <section className="row m-0 my-5 bg-light p-4">
                    <div className="col-lg-12">
                        <h5 className="custom-color fw-bold">INSTRUCTORS</h5>
                        <h1 className="mb-4 fw-bold">Our Expert Instructors</h1>
                        <div className="row px-5">
                            {
                                instructors.map(instructor => <Instructor instructor={instructor} key={instructor.id}></Instructor>)
                            }
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Others;