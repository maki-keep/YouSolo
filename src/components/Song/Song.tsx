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
    <li>
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
        <br />
        <span className="release-date">{song.release_date}</span>
      </button>
    </li>
  );
}

export default Song;
