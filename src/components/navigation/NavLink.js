import React from 'react';

const NavLink = props => {
    return (
        <li className="nav-item">
            <a className="nav-link" href={props.navlink}>{props.navlinkname}</a>
        </li>
    );
};

export default NavLink;