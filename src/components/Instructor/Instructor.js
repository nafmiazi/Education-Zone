import React from 'react';
import './Instructor.css';
import '../Footer/Footer.css';

const Instructor = (props) => {
    // Destructure property value
    const {name, img, subject, designation} = props.instructor;

    // Return each instructor
    return (
        <div className="col-lg-3 gx-4 gy-2">
            <div className="card border-0 shadow p-2">
                <div>
                    <img src={img} className="card-img-top" height="250px" alt="..." />
                </div>
                <div className="card-body">
                    <h3 className="card-text">{name}</h3>
                    <p className="card-text custom-color fw-bold">{designation}</p>
                    <p className="card-text fw-bold">Subject: {subject}</p>
                </div>
            </div>
        </div>
    );
};

export default Instructor;