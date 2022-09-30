import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Song as SongI } from "../../types/types";
import "./Song.css";

function Song({
  song,
  image_color,
  handleSelectSong
}: {
  song: SongI,
  image_color: string,
  handleSelectSong: React.MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <li className="song">
      <button
        className="lovelive-button lovelive-text song-button"
        name={`${song.id}`}
        aria-label={`play ${song.title}`}
        onClick={handleSelectSong}
        css={css`
          &:hover {
            background-color: ${image_color}40;
          }
        `}
      >
        <span className="song-title">{song.title}</span>
      </button>
    </li>
  );
}

export default Song;