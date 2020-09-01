import React from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import Navbar from './navigation/Navbar';
import Hero from './hero/Hero';
import CurrentStatsCard from './cards/CurrentStats/CurrentStatsCard';
import UVCard from './cards/UVCard/UVCard';
// The api used is from Open Weather Map


class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = { lat: null, long: null, apikey: 'c1a3e75af3c0e91b7821f28f64d55d44', currentWeather: null }

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude, long: position.coords.longitude });
                const res = getRequest(this.state.lat, this.state.long, this.state.apikey)
                .then(result => {
                    const weather = result.data.current;
                    this.setState({currentWeather : weather});
                })
            },
            err => console.log(err)
        );
        

        const getRequest = async(lat, long, apikey) => {
            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apikey}&units=imperial`);
                return result;
            }
            catch(err){
                console.error(err);
            }
        }

    }

    componentDidMount() {
        console.log('app mounted');
    }

    render() {


        return (
            <div className='vw-100 row no-gutters'>
                <Navbar name='Weather Genie' imagelink='#' imageurl='./assets/GenieBottleLogo.png' imagealt='Weather Genie Logo' />
                <Hero header='Current Weather' currentweather={this.state.currentWeather} bgcolor='bg-dark text-light' />
                <CurrentStatsCard currentweather={this.state.currentWeather} />
                <UVCard currentweather={this.state.currentWeather}/>
            </div>)
    }


}

export default App;