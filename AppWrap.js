import React from "react";
import { NavigationDots } from "../components";

const AppWrap = (Component, idName) =>
  function HOC() {
    return (
      <div className="app__main" id={idName}>
        <NavigationDots active={idName} />
        <Component />
      </div>
    );
  };

export default AppWrap;
