import React from 'react';
import './NotFound.css';
import '../Footer/Footer.css';

const NotFound = () => {

    // Return Not Fond Result
    return (
        <div className="not-found d-flex justify-content-center align-items-center">
            <section className="custom-color">
                <i className="fas fa-5x fa-bomb"></i>
                <h1>Opssss!</h1>
                <h1>404 Not Found!!</h1>
            </section>
        </div>
    );
};

export default NotFound;