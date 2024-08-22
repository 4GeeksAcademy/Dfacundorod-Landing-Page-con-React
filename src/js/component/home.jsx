import React from "react";
import PropTypes from "prop-types";
import { NavBar } from "./navBar";
import { Jumbotron } from "./jumbotron";

export const Home = ()=>{
    return(
        <div className="container">
            <NavBar title='Start Boostrap' titleUrl='#'/>
            <Jumbotron title='A Warm Welcome' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam incidunt nisi nesciunt. Alias voluptatem dolor sit reprehenderit molestiae fugit inventore libero? Dolorum maiores pariatur molestias rem incidunt, tempora provident ex.' label='Call to action!' />
        </div>
    )
}