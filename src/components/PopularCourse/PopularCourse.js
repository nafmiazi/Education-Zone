import React from 'react';
import './PopularCourse.css';
import '../Footer/Footer.css';

const PopularCourse = (props) => {

    // Destructring property value
    const {name, img, week} = props.course;

    // Return Popular Courses
    return (
        <div className="col-lg-3 gx-4 gy-2">
            <div className="card border-0 shadow custom-card p-4">
                <div>
                    <img src={img} className="card-img-top" height="200px" alt="..." />
                </div>
                <div className="card-body">
                    <h3 className="card-text">{name}</h3>
                    <p className="card-text custom-color fw-bold"><i className="far fa-calendar-alt"></i> {week}</p>
                </div>
            </div>
        </div>
    );
};

export default PopularCourse;