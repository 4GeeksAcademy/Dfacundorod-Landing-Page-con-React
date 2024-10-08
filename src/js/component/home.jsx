//import react into the bundle
import React from "react";

// include your styles into the webpack bundle


//import your own components
import { NavBar } from "./navBar";
import { Jumbotron } from "./jumbotron";
import { Cards } from "./cards";
import { Footer } from "./footer";

export function Home(){
    return(<div className="container-fluid">
        <NavBar title='Start Boostrap' titleUrl='#'/>
        <Jumbotron title='A Warm Welcome' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam incidunt nisi nesciunt. Alias voluptatem dolor sit reprehenderit molestiae fugit inventore libero? Dolorum maiores pariatur molestias rem incidunt, tempora provident ex.' label='Call to action!' />
        <Cards/>
        <Footer/>
    </div>)
}
