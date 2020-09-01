import React from 'react';

const Spinner = () => {
    return (
        <div className='vh-100 vw-100 row justify-content-center bg-dark'>
            <div className="spinner-border text-primary my-auto" role="status">
                <span className="sr-only">Loading...</span>
                <span className='text-primary'>Loading...</span>
            </div>
        </div>
    );

}

export default Spinner;