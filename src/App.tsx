import { useEffect, useState } from "react";
import { useAppSelector } from "./app/hooks";
import {
  selectActiveOverlayWindow
} from "./appSlice";
import "./App.css";
import logo from "./media/yousolo-logo.png";
import idols from "./data/idols.json";
import Header from "./components/Header/Header";
import Embed from "./components/Embed/Embed";
import IdolButton from "./components/IdolButton/IdolButton";
import About from "./components/About/About";
import IdolView from "./components/IdolView/IdolView";

function App() {
  const activeOverlayWindow = useAppSelector(selectActiveOverlayWindow);
  const [overlay, setOverlay] = useState(false);
  useEffect(() => {
    if (activeOverlayWindow !== "") {
      setOverlay(true);
    } else {
      setOverlay(false);
    }
  }, [activeOverlayWindow]);
  return (
    <>
      <Header />
      <main>
        <div className="wrapper">
          <section className="logo-container">
            <h1>
              <img
                src={logo}
                className="YouSolo-logo"
                alt="YouSolo School idol solos"
                width="204"
                height="59"
              />
            </h1>
          </section>
          <Embed />
          <div className="idol-buttons-container lovelive-box">
            <ol className="idol-buttons">
            {idols.items.map((item, index) => (
              <IdolButton
                key={index}
                index={index}
                idol={item}
              />
            ))}
            </ol>
          </div>
        </div>
        <div
          className="overlay"
          style={{
            display: overlay ? "block" : "none"
          }}
        >
          <div
            className="overlay-window lovelive-box"
            style={{
              display: activeOverlayWindow !== "" ? "block" : "none"
            }}
          >
            <About />
          {idols.items.map((item, index) => (
            <IdolView
              key={index}
              index={index}
              idol={item}
            />
          ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
