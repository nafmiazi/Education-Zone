import React from 'react';
import './Course.css'

const Course = (props) => {
    // Data destructring
    const {name, img, week, duration, time, salary} = props.course;

    // Return Each Course
    return (
        <div className="col-lg-3 g-3">
            <div className="card border-0 shadow custom-card p-4 pb-2">
                <div>
                    <img src={img} className="card-img-top" height="200px" alt="..." />
                </div>
                
                <div className="card-body">
                    <h3 className="card-text">{name}</h3>
                    <p className="card-text custom-color fw-bold"><i className="far fa-calendar-alt"></i> {week}</p>
                    <div className="d-flex justify-content-around">
                        <p><i className="fas fa-bell me-2"></i>{duration}</p>
                        <p><i className="far fa-clock"></i> {time}</p>
                    </div>
                    <h4 className="mt-2"><i className="fas fa-dollar-sign me-2"></i>{salary}</h4>
                </div>
            </div>
        </div>
    );
};

export default Course;