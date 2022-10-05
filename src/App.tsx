import { useEffect, useState } from "react";
import { useAppSelector } from "./app/hooks";
import {
  selectActiveOverlayWindow
} from "./appSlice";
import "./App.css";
import logo from "./media/yousolo-logo.png";
import idols from "./data/idols.json";
import Navbar from "./components/Navbar/Navbar";
import Embed from "./components/Embed/Embed";
import IdolButton from "./components/IdolButton/IdolButton";
import About from "./components/About/About";
import IdolView from "./components/IdolView/IdolView";

function App() {
  const activeOverlayWindow = useAppSelector(selectActiveOverlayWindow);
  /* overlay */
  const [overlay, setOverlay] = useState(false);
  useEffect(() => {
    if (activeOverlayWindow !== "") {
      setOverlay(true);
    } else {
      setOverlay(false);
    }
  }, [activeOverlayWindow]);
  /* end of overlay */
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <div className="wrapper">
          <div className="logo-container">
            <h1>
              <img
                src={logo}
                className="YouSolo-logo"
                alt="YouSolo School idol solos"
                width="204"
                height="59"
              />
            </h1>
          </div>
          <Embed />
          <div className="idol-buttons-box lovelive-box">
            <div className="idol-buttons-container">
              <ol className="idol-buttons">
              {idols.items.map((item, index) => (
                <IdolButton
                  key={item.name}
                  index={index}
                  idol={item}
                />
              ))}
              </ol>
            </div>
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
    </div>
  );
}

export default App;
