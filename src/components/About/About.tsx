import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  closeOverlayWindow,
  selectActiveOverlayWindow
} from "../../appSlice";
import { Icon } from "@iconify/react";
import "./About.css";

function About() {
  const idAttribute = `about-window`;
  const activeOverlayWindow = useAppSelector(selectActiveOverlayWindow);
  const matchIdAttribute = activeOverlayWindow === idAttribute;
  const dispatch = useAppDispatch();
  const handleCloseOverlayWindow: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(closeOverlayWindow());
  };
  return (
    <div
      id={idAttribute}
      style={{
        display: matchIdAttribute ? "block" : "none"
      }}
    >
      <button
        className="lovelive-button close-overlay"
        onClick={handleCloseOverlayWindow}
      >
        <Icon
          icon="ci:close-big"
          color="white"
          width="32"
          height="32"
        />
      </button>
      <div className="about-container">
        <section>
          <h2>About</h2>
          <p>Web application made by Queen Maki. You may contribute to the development in <a href="https://github.com/maki-keep/YouSolo">this GitHub repository</a>.</p>
        </section>
      </div>
    </div>
  );
}

export default About;
