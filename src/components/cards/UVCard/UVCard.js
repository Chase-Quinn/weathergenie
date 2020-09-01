import React from 'react';

function getUVInfo(rating) {
    var desc;
    if (rating > 0 && rating <= 2) {
        desc = 'Low';
    }
    else if (rating > 2 && rating <= 5) {
        desc = 'Moderate';
    }
    else if (rating > 5 && rating <= 7) {
        desc = 'High';
    }
    else if (rating > 7 && rating < 11) {
        desc = 'Very High';
    }
    else if (rating >= 11) {
        desc = 'Extreme';
    }

    return desc;
}

const UVCard = props => {
    var uvrating, uvdescription;
    if (props.currentweather != undefined) {
        const weather = props.currentweather;
        uvrating = weather.uvi;
        uvdescription = getUVInfo(uvrating);
    }
    return (
        <div className="card col-xl-8 col-sm-12 text-center">
            <div className="card-body row no-gutters">
                <div className='col-12'>
                    <h3>UV Index</h3>
                </div>
                <div className='col-12'>
                    <p>Current Rating:</p>
                    <h3>{uvrating} ({uvdescription})</h3>
                </div>
                <div className='col-1 1 my-auto' style={{ 'border': '1px solid black' }, { 'backgroundColor': 'green' }}>1</div>
                <div className='col-1 2 my-auto' style={{ 'border': '1px solid black' }, { 'backgroundColor': 'green' }}>2</div>
                <div className='col-1 3 my-auto' style={{ 'border': '1px solid black' }, { 'backgroundColor': 'yellow' }}>3</div>
                <div className='col-1 4 my-auto' style={{ 'border': '1px solid black' }, { 'backgroundColor': 'yellow' }}>4</div>
                <div className='col-1 5 my-auto' style={{ 'border': '1px solid black' }, { 'backgroundColor': 'yellow' }}>5</div>
                <div className='col-1 6 my-auto' style={{ 'border': '1px solid black' }, { 'backgroundColor': 'orange' }}>6</div>
                <div className='col-1 7 my-auto' style={{ 'border': '1px solid black' }, { 'backgroundColor': 'orange' }}>7</div>
                <div className='col-1 8 my-auto' style={{ 'border': '1px solid black' }, { 'backgroundColor': 'red' }}>8</div>
                <div className='col-1 9 my-auto' style={{ 'border': '1px solid black' }, { 'backgroundColor': 'red' }}>9</div>
                <div className='col-1 10 my-auto' style={{ 'border': '1px solid black' }, { 'backgroundColor': 'red' }}>10</div>
                <div className='col-2 10 my-auto' style={{ 'border': '1px solid black' }, { 'backgroundColor': 'violet' }}>11+</div>
            </div>
            <div className='col-12 text-muted'>
                Weather information provided by Open Weather Map!
            </div>
        </div>
    );
}

export default UVCard;