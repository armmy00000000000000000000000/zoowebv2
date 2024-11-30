// src/NotFoundPage.js
import { Link } from 'react-router-dom';
import React from 'react';

const NotFoundPage = () => {
    return (
        <>

            <div className="container-fluid header-bg py-5 mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn' }}>
                <div className="container py-5">
                    <h1 className="display-4 text-white mb-3 slideInDown">
                        404 Error
                    </h1>

                </div>
            </div>

            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
            <h1 className="display-1">404</h1>
            <h1 className="mb-4">Page Not Found</h1>
            <p className="mb-4">
              We’re sorry, the page you have looked for does not exist in our
              website! Maybe go to our home page or try to use a search?
            </p>
            <Link to="/Home" className="btn btn-primary py-3 px-5">Go Back To Home</Link>
          </div>
        </div>
      </div>
    </div>

        </>

    );
};

export default NotFoundPage;
