import React from "react";
import PropTypes from 'prop-types';

export const Jumbotron = (props)=>{
    return( 
        <div className="container my-5">
            <div className="position-relative p-5 text-muted bg-light border border-dashed rounded-5">
                <h1 className="text-body-emphasis" style={{ fontSize: '3rem' }}>{props.title}</h1>
                <p className="col-lg-6 mb-4">{props.text}</p>
                <button className="btn btn-primary px-5 mb-5" type="button">{props.label}</button>
            </div>
        </div>
)}

Jumbotron.PropTypes={
    title: PropTypes.string,
    text:PropTypes.string,
    label:PropTypes.string
}