import React from 'react';

const Spinner = () => {
    return (
        <div className='vh-100 vw-100 row justify-content-center bg-light'>
            <div className='my-auto col-12 text-center'>
                <img className='col-2' src='./assets/GenieBottleLogo.png' />
                <h1 className='col-12 text-dark'>Weather Genie</h1>
            </div>
            <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            <strong className='text-primary'>Loading...</strong>
        </div>
    );

}

export default Spinner;