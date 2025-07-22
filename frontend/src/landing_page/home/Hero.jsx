import React from 'react';
import './home.css'

function Hero() {
    return (
        <div className="container d-flex justify-content-center p-5 mb-5">
            <div className="row d-flex justify-content-center text-center">
                <div className="col-md-9 d-flex flex-column align-items-center">
                    <img src="media/images/homeHero.png" alt="Hero Image" className='mb-5 img-fluid' />
                    <h2 className='mt-3 fs-2 fw-bold'>Invest in everything</h2>
                    <h5 className='fs-4 mt-3'> Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more. </h5>
                    <button className='p-2 btn btn-primary mt-5 signup-button'>Sign up for free</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
