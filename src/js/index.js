//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

import { NavBar } from "./component/navBar";
import { Jumbotron } from "./component/jumbotron";
import { Cards } from "./component/cards";
import { Footer } from "./component/footer";

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<div className="container-fluid">
    <NavBar title='Start Boostrap' titleUrl='#'/>
    <Jumbotron title='A Warm Welcome' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam incidunt nisi nesciunt. Alias voluptatem dolor sit reprehenderit molestiae fugit inventore libero? Dolorum maiores pariatur molestias rem incidunt, tempora provident ex.' label='Call to action!' />
    <Cards/>
    <Footer/>
</div>);

