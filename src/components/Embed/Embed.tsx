import React from "react";
import { Song as SongI } from "../../types/types";
import "./Embed.css";

function Embed({
  currentSongId
}: {
  currentSongId: SongI["id"]
}) {
  return (
    <div className="embed-container">
      <div
        className="embed-placeholder"
        style={{
          display: currentSongId === "" ? "block" : "none"
        }}
      >
        <p>Select an idol and one of her songs to start listening.</p>
      </div>
      {currentSongId !== "" && (
        <iframe
          width="296"
          height="222"
          src={`https://www.youtube.com/embed/${currentSongId}`}>
        </iframe>
      )}
    </div>
  );
}

export default Embed;
