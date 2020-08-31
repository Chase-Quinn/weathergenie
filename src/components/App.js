import React from 'react';
import axios from 'axios';
import Navbar from './navigation/Navbar';
import Hero from './hero/Hero';
import CurrentStatsCard from './cards/CurrentStats/CurrentStatsCard';
// The api used is from Open Weather Map

function getweather(res) {
    const weather = res.data.current.weather;
    return weather;
};

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = { lat: null, long: null, apikey: 'c1a3e75af3c0e91b7821f28f64d55d44', currentWeather: null }

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude, long: position.coords.longitude });
            },
            err => console.log(err)
        );

    }

    componentDidUpdate() {
        if (this.state.weather == null) {
            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.long}&
            exclude={part}&appid=${this.state.apikey}&units=imperial`)
                .then(res => {
                    const currentJSON = res.data.current.weather[0].id;
                    this.setState({currentWeather: currentJSON});
                })
        }
    }

    render() {


        return (
            <div className='vw-100 row no-gutters'>
                <Navbar name='Weather Genie' imagelink='#' imageurl='./assets/GenieBottleLogo.png' imagealt='Weather Genie Logo' />
                <Hero header='Current Weather' currentweather={this.state.currentWeather} bgcolor='bg-dark text-light' />
                <CurrentStatsCard />
            </div>)
    }


}

export default App;