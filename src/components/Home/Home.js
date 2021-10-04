import React, { useEffect, useState } from 'react';
import PopularCourse from '../PopularCourse/PopularCourse';
import './Home.css';
import '../Footer/Footer.css';
import { Link } from 'react-router-dom';

const Home = () => {

    // Declare state and load data
    const [courses, setCourses] = useState([]);
    useEffect( () => {
        fetch('./education.JSON')
        .then(res => res.json())
        .then(data => setCourses(data.slice(0,4)))
    }, [])

    // Display Home Page section
    return (
        <div className="row home-section">
            <div className="col-lg-12 top-banner text-start">
                <div className="color-overlay">
                    <div className="banner ps-5">
                        <h5 className="title mb-3">START LEARNING IN EDUCATION ZONE</h5>
                        <h1 className="header">Offline Courses From Experienced And Experts</h1>
                        <p className="description">We are providing high-quality offline courses to improve your skill. Our all instructors are highly experienced and experts.</p>
                        <div className="button mt-5">
                            <Link to="/courses">
                                <button className="btn btn-lg btn-find-course text-white">Find Courses</button>
                            </Link>
                            <Link to="/others">
                                <button className="btn btn-lg btn-light btn-extra ms-3">Explore More</button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-12 mt-5">
                <p className="custom-color fw-bold">COURSES</p>
                <h2 className="mb-4 fw-bold">Explore Popular Courses</h2>
                <div className="row px-5">
                    {
                        courses.map(course => <PopularCourse course={course} key={course.id}></PopularCourse>)
                    }
                </div>
                <Link to="/courses">
                    <button className="btn btn-lg btn-find-course text-white my-5">Find All Courses</button>
                </Link>
                
                <div className="row my-5 blog-section text-white p-5">
                    <div className="col-lg-6 border-end">
                        <h1 className="latest">Latest News</h1>
                    </div>
                    <div className="col-lg-6 text-start">
                        <i className="fas fa-3x mb-2 custom-color fa-hand-holding-usd"></i>
                        <h1>We announce 50% Discount On All Of Our New and Upcoming Courses</h1>
                        <Link to="/others">
                            <button className="btn btn-lg btn-find-course text-white btn-extra">Check This Out</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;