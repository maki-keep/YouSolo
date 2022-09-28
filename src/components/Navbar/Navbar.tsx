import React from "react";
import { Icon } from "@iconify/react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <button
        id="more"
        aria-label="open more options"
      >
        <Icon icon="ci:more-horizontal" color="white" width="24" height="24" />
      </button>
    </nav>
  );
}

export default Navbar;
