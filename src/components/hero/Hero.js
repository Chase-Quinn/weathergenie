import React from 'react';
import '../../css/hero.css';

const iconConfig = {
    thunderstorm: {
        subheader: 'Thunderstorms',
        icon: 'https://img.icons8.com/dotty/80/000000/storm.png',
        bgcolor: 'text-light thunderstorm'
    },
    rain: {
        subheader: 'Rain',
        icon: 'https://img.icons8.com/wired/64/000000/rain.png',
        bgcolor: 'text-light rain'
    },
    sunny: {
        subheader: 'Sunny',
        icon: 'https://img.icons8.com/wired/64/000000/sun.png',
        bgcolor: 'text-primary sunny'
    },
    clouds: {
        subheader: 'Cloudy',
        icon: 'https://img.icons8.com/wired/64/000000/clouds.png',
        bgcolor: 'text-dark cloudy'
    },
    snow: {
        subheader: 'Snowing',
        icon: 'https://img.icons8.com/color/48/000000/snow.png',
        bgcolor: 'text-light snow'
    }
}

function getweathertype(res){
    return res.weather[0].main;
}

function getcurrenttemp(res){
    return res.temp;
}

const Hero = props => {
    var currenttemp, subheader, icon, bgcolor;


    if (props.currentweather != undefined){
        const weather = props.currentweather;
        const weathertype = getweathertype(weather);
        currenttemp = getcurrenttemp(weather);
        console.log(weathertype);
        // var { subheader, icon, bgcolor } = iconConfig[weathertype];
        console.log(subheader)
    }
        return (
            <div className={`jumbotron w-100 ${bgcolor}`}>
                <div className='col-12 row'>
                    <img src={icon} className='col-1' />
                    <h1 className="display-4 col-10 text-center">Current Weather</h1>
                    <img src={icon} className='col-1' />
        <h1 className="col-12 text-center" style={{'fontSize': '350%'}}>{currenttemp}</h1>
                    <h2 className="col-12 text-center">{subheader}</h2>
                </div>
            </div>
        );
}




export default Hero;