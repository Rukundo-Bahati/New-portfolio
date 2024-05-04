import React, { useEffect, useState } from "react";

import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Nav from "./navbar/Nav";
import Project from "./projects/Project";
import Service from "./services/Service";
import Testimonial from "./testimonial/Testimonial";

const App = () => {
  
  return (
    <div>
      <div>
        <Nav />
        <Home />
        <About />
        <Service />
        <Project />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
