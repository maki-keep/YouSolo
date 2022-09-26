import React from "react";
import { useEffect, useState } from "react";
import { Song as SongI } from "./types/types";
import "./App.css";
import logo from "./media/yousolo-logo.png";
import idols from "./data/idols.json";
import Navbar from "./components/Navbar/Navbar";
import Embed from "./components/Embed/Embed";
import IdolButton from "./components/IdolButton/IdolButton";
import IdolView from "./components/IdolView/IdolView";

function App() {
  const [activeIdolView, setActiveIdolView] = useState("");
  const [currentSongId, setCurrentSongId] = useState("");
  // useEffect(() => {}, [activeIdolView]);
  const handleOpenView: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const index = e.currentTarget.id.substring(12);
    setActiveIdolView(`idol-view-${index}`);
  };
  const handleSelectSong: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const { name } = e.currentTarget;
    setCurrentSongId(name);
  };
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <h1>
          <img
            src={logo}
            className="YouSolo-logo"
            alt="YouSolo School idol solos"
            width="204"
            height="59"
          />
        </h1>
        <div className="wrapper">
          <Embed
            currentSongId={currentSongId}
          />
          <div className="idol-buttons-container">
            <div className="idol-buttons">
            {idols.items.map((item, index) => (
              <IdolButton
                key={item.name}
                index={index}
                idol_name={item.name}
                idol_name_jp={item.name_jp}
                image_color={item.button_image.background_color}
                image_url={item.button_image.url}
                handleOpenView={handleOpenView}
              />
            ))}
            </div>
          </div>
          <div className="idol-views">
          {idols.items.map((item, index) => (
            <IdolView
              key={item.name}
              index={index}
              activeIdolView={activeIdolView}
              idol_name={item.name}
              idol_name_jp={item.name_jp}
              image_color={item.button_image.background_color}
              image_url={item.button_image.url}
              songs={item.songs}
              handleSelectSong={handleSelectSong}
            />
          ))}
          </div>
        </div>
      </main>
      <footer>
        <span className="copyright">©2013 PROJECT Lovelive!\n©2017 PROJECT Lovelive! Sunshine!!</span>
      </footer>
    </div>
  );
}

export default App;
