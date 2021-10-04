import React, { useEffect, useState } from 'react';
import './Courses.css'
import '../Footer/Footer.css'
import Course from '../Course/Course';

const Courses = () => {

    // Declare State and load data
    const [courses, setCourses] = useState([]);
    useEffect( () => {
        fetch('./education.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    
    // Display Courses
    return (
        <section className="row m-0 my-5">
            <div className="col-lg-12">
                <h5 className="custom-color fw-bold">COURSES</h5>
                <h1 className="mb-4 fw-bold">Explore All Courses</h1>
                <div className="row px-5">
                    {
                        courses.map(course => <Course course={course} key={course.id}></Course>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Courses;