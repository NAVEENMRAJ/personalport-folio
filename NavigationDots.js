import React from "react";

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {["Home", "About", "Skills", "Contact"].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: "#ec0d13" } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;
