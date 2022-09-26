import React from "react";
import { Song as SongI } from "../../types/types";
import "./Song.css";

function Song({
  song,
  handleSelectSong
}: {
  song: SongI,
  handleSelectSong: React.MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <li>
      <button
        className="song-button"
        name={`${song.id}`}
        aria-label={`play ${song.title}`}
        onClick={handleSelectSong}
      >
        <span className="song-title">{song.title}</span>
        <span className="release-date">{song.release_date}</span>
      </button>
    </li>
  );
}

export default Song;
