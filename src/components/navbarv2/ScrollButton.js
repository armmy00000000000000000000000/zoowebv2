import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  const Buttonstyle = {
    position: "fixed",
    right: "3%",
    bottom: "40px",
    fontSize: "0.5rem",
    zIndex: 1,
    cursor: "pointer",
  };


  return (
    <div
      style={Buttonstyle}
    >
        <FontAwesomeIcon
          icon={faArrowUp}
          onClick={scrollToTop}
          className="btn btn-primary  btn-square p-2"
          style={{ display: visible ? "inline" : "none" }}
        />
     
    </div>
  );
};

export default ScrollButton;
