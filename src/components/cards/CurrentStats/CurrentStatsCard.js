import React from 'react';

const CurrentStatsCard = props => {
    var windspeed, humidity, pressure;
    if (props.currentweather != undefined) {
        const weather = props.currentweather
        windspeed = weather.wind_speed;
        humidity = weather.humidity;
        pressure = weather.pressure;
    }
    return (
        <div className="card col-xl-4 col-sm-12 text-center">
            <div className="card-body">
                <table className='table col-12'>
                    <thead>
                        <tr>
                            <th scope='col'>
                                Current Stats
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Wind Speed: {windspeed}mph</td>
                        </tr>
                        <tr>
                            <td>Humidity: {humidity}%</td>
                        </tr>
                        <tr>
                            <td>Pressure: {pressure}hPa</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CurrentStatsCard;