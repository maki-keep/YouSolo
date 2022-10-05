import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import {
  openAboutWindow
} from "../../appSlice";
import { Icon } from "@iconify/react";
import "./Navbar.css";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleShowDropdown: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (showDropdown) {
      setShowDropdown(false);
    } else {
      setShowDropdown(true);
    }
  };
  const dispatch = useAppDispatch();
  const handleOpenAboutWindow: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(openAboutWindow());
  };
  return (
    <nav>
      <ul>
        <li>
          <button
            id="more"
            className="lovelive-button"
            aria-label="open more options"
            onClick={handleShowDropdown}
          >
            <Icon
              icon="ci:more-horizontal"
              color="white"
              width="24"
              height="24"
            />
          </button>
          <div
            className="dropdown"
            style={{
              display: showDropdown ? "block" : "none"
            }}
          >
            <ul>
              <li>
                <button
                  id="about-button"
                  className="dropdown-button"
                  aria-label="see info about YouSolo"
                  onClick={handleOpenAboutWindow}
                >
                  About
                </button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
