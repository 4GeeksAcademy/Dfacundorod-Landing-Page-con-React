import React from "react";
import PropTypes from "prop-types"

const NavLink= (props)=>{
    return <a className="nav-link" href={props.href}>{props.label}</a>

}
NavLink.propTypes = {
    href:PropTypes.string,
    label:PropTypes.string
};
const links=[
    {href: '#', label: 'Home'},
    {href: '#', label: 'About'},
    {href: '#', label: 'Services'},
    {href: '#', label: 'Contact'},
]

export const NavBar= (props)=>{
    return(
    <nav className="navbar navbar-expand-lg bg-dark mb-1">
        <a className="navbar-brand col-5 d-flex justify-content-center text-light" href={props.titleUrl}>{props.title}</a>
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
                <div className="navbar-nav d-flex justify-content-evenly color-">
                    {links.map((link, index)=>{
                        return <a key={index} className="nav-link text-light" href={link.href}>{link.label}</a>
                    })}
                </div>
            </div>
        </div>
    </nav>
    );
};

NavBar.propTypes = {
    title: PropTypes.string,
    titleUrl: PropTypes.string,
};

