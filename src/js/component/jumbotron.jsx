import React from "react";
import PropTypes from 'prop-types';

export const Jumbotron = (props)=>{
    return( 
    <div className="jumbotron container bg-light p-2 pb-5">
        <h1 className="display-4">{props.title}</h1>
        <p className="lead">{props.text}</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">{props.label}</a>
    </div>
)}

Jumbotron.PropTypes={
    title: PropTypes.string,
    text:PropTypes.string,
    label:PropTypes.string
}