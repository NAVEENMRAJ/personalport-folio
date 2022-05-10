import React from "react";

import { Home, About, Skills, Contact } from "./container";
import { Navbar } from "./components";


const Main = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
    </>
  );
};

export default Main;
