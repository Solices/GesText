import React from "react";
import Navbar from "./Navbar";
import App from "./App"
import About from "./About"
import How from "./How"
import Contact from "./Contact"
import { Route, Link } from "react-router-dom";
function Home()
{
  return(

    <ul>
      <Navbar></Navbar>
        <Route exact path="/app" component={App} />
          <Route exact path="/about" component={About} />
          <Route exact path="/how" component={How} />
          <Route exact path="/contact" component={Contact} /> 



    </ul>


  )
}



export default Home;