import React from "react";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { Song as SongI } from "../../types/types";
import "./Embed.css";

function Embed({
  currentSongId
}: {
  currentSongId: SongI["id"]
}): EmotionJSX.Element {
  let embedElement: EmotionJSX.Element;
  if (currentSongId === "") {
    embedElement = (
      <div className="embed-placeholder">
        <p>Select an idol and one of her songs to start listening.</p>
      </div>
    );
  } else {
    embedElement = (
      <iframe
        width="296"
        height="124"
        src={`https://www.youtube.com/embed/${currentSongId}`}>
      </iframe>
    );
  }
  return (
    <div className="embed-container">
      {embedElement}
    </div>
  );
}

export default Embed;
