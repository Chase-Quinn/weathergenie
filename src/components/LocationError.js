import React from 'react';

const LocationError = props => {
    return (
        <div className='vh-100 vw-100 row justify-content-center bg-light'>
            <div className='card bg-warning my-auto mx-auto text-center' style={{ 'padding': '15px' }}>
                <div className='col-12 text-center'>
                    <img className='col-4' src='./assets/GenieBottleLogo.png' />
                </div>
                <h1 className='card-title'>Message from Weather Genie:</h1>
                <hr />
                <p className='text-danger'>{props.error}</p>
                <p className='text-dark'>{props.message}</p>
            </div>
        </div>
    );
}

export default LocationError;