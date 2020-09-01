import React from 'react';
import '../../css/hero.css';

const iconConfig = {
    Thunderstorm: {
        subheader: 'Thunderstorms',
        icon: 'https://img.icons8.com/dotty/80/000000/storm.png',
        bgcolor: 'text-light thunderstorm'
    },
    Rain: {
        subheader: 'Rain',
        icon: 'https://img.icons8.com/wired/64/000000/rain.png',
        bgcolor: 'text-light rain'
    },
    Clear: {
        subheader: 'Clear',
        icon: 'https://img.icons8.com/wired/64/000000/sun.png',
        bgcolor: 'text-primary sunny'
    },
    Clouds: {
        subheader: 'Cloudy',
        icon: 'https://img.icons8.com/wired/64/000000/clouds.png',
        bgcolor: 'text-dark cloudy'
    },
    Snow: {
        subheader: 'Snow',
        icon: 'https://img.icons8.com/color/48/000000/snow.png',
        bgcolor: 'text-light snow'
    },
    Drizzle: {
        subheader: 'Drizzle',
        icon: 'https://img.icons8.com/officel/16/000000/light-rain.png',
        bgcolor: 'text-light drizzle'
    },
    Atmosphere: {
        subheader: 'Snow',
        icon: 'https://img.icons8.com/cotton/64/000000/earth-planet--v1.png',
        bgcolor: 'text-light atmosphere'
    }
}

function getweathertype(res){
    return res.weather[0].main;
}

function getcurrenttemp(res){
    return Math.trunc(res.temp);
}

function getDescription(res) {
    var a = res.weather[0].description;
    var b = titleCase(a);
    return b;
}

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }

const Hero = props => {
    var currenttemp, subheader, icon, bgcolor, description;


    if (props.currentweather != undefined){
        const weather = props.currentweather;
        const weathertype = getweathertype(weather);
        currenttemp = getcurrenttemp(weather);
        description = getDescription(weather);
        var { subheader, icon, bgcolor } = iconConfig[weathertype];
    }
        return (
            <div className={`jumbotron w-100 ${bgcolor}`}>
                <div className='col-12 row'>
                    <h1 className="display-4 col-12 text-center currentWeather">Current Weather</h1>
                    <h1 className="col-12 text-center" style={{'fontSize': '350%'}}>{currenttemp}°F</h1>
                    <h2 className="col-12 text-center">{subheader}</h2>
                    <h2 className="col-12 text-center">{description}</h2>
                </div>
            </div>
        );
}




export default Hero;