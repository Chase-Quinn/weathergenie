import React from 'react';

class CurrentStatsCard extends React.Component {
    render() {
        return (
            <div className="card col-xl-4 col-sm-12 text-center">
                <div className="col-12 text-center">
                    <img src="./assets/GenieBottleLogo.png" className="card-img-top col-4" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    }
}

export default CurrentStatsCard;