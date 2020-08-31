import React from 'react';

const NavImage = props => {
    return (
        <a className="navbar-brand" href={props.imagelink}>
            <img src={props.imageurl} width="45" height="30" className="d-inline-block align-top" alt={props.imagealt} />
        </a>
    );
};

export default NavImage;