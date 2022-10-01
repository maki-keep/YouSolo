import React from "react";
import { useAppDispatch } from '../../app/hooks';
import {
  clickSong
} from "../../appSlice";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Song as SongI, Idol as IdolI } from "../../types/types";
import "./Song.css";

function Song({
  song,
  image_color
}: {
  song: SongI,
  image_color: IdolI["button_image"]["background_color"]
}) {
  const dispatch = useAppDispatch();
  const handleClickSong: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const { name } = e.currentTarget;
    dispatch(clickSong(name));
  };
  return (
    <li className="song">
      <button
        className="lovelive-button lovelive-text song-button"
        name={`${song.id}`}
        aria-label={`play ${song.title}`}
        onClick={handleClickSong}
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
