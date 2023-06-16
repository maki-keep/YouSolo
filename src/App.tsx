import { useAppSelector } from "./app/hooks";
import {
  selectActiveOverlayWindow
} from "./appSlice";
import { Idol as IdolI } from "./types/types";
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
  const findIdolCallback = (item: IdolI, index: number) => {
    // whether idol window at index is open
    return activeOverlayWindow === `idol-view-${index}`;
  };
  const foundIdol = idols.items.find(findIdolCallback);
  const foundIdolIndex = idols.items.findIndex(findIdolCallback);
  /* console.log(`Found ${foundIdol?.name["en-US"]} at ${foundIdolIndex}.`); */
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
            display: activeOverlayWindow !== "" ? "block" : "none"
          }}
        >
          <div
            className="overlay-window lovelive-box"
          >
          {activeOverlayWindow === "about-window" && (
            <About />
          )}
          {(foundIdol !== undefined && foundIdolIndex !== -1) && (
            <IdolView
              index={foundIdolIndex}
              idol={foundIdol}
            />
          )}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
