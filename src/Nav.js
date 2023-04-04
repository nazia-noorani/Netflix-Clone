import React from "react";
import "./Nav.css";
import { useEffect } from "react";
import { useState } from "react";

function Nav() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        // if (window.scrollY > 100) {
        //   setShow(true);
        // } else {
        //   setShow(false);
        // }
      });
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="n_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2015_N_logo.svg"
        alt="Netflix_logo"
      />

      {/* <img
        className="avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="avatar"
      /> */}
    </div>
  );
}

export default Nav;
