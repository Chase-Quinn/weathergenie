import React from 'react';
import NavImage from './NavImage';
import NavLink from './NavLink'

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light w-100 bg-light">
                <NavImage  imageurl = {this.props.imageurl} imagelink = {this.props.imagelink} imagealt = {this.props.imagealt} />
                <a className="navbar-brand" href="#">{this.props.name}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink navlink = '#' navlinkname = 'Current Weather' />
                        <NavLink navlink = '#' navlinkname = 'Forecast' />
                        <NavLink navlink = '#' navlinkname = 'Information' />
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;