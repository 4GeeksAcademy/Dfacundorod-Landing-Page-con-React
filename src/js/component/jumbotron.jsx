import React from "react";
import PropTypes from 'prop-types';

export const Jumbotron = (props)=>{
    return( 
    <div class="jumbotron">
        <h1 class="display-4">{props.title}</h1>
        <p class="lead">{props.text}</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">{props.label}</a>
    </div>
)}

Jumbotron.PropTypes={
    title: PropTypes.string,
    text:PropTypes.string,
    label:PropTypes.string
}