import React from "react";
import { useAppDispatch } from '../../app/hooks';
import {
  closeOverlayWindow,
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
    dispatch(closeOverlayWindow());
  };
  return (
    <li className="song">
      <button
        className="lovelive-button lovelive-text song-button"
        name={`${song.id}`}
        aria-label={`play ${song.title}`}
        onClick={handleClickSong}
        css={css`
          border-color: ${image_color};
          &:hover {
            border-color: ${image_color}44;
          }
        `}
      >
        <p className="song-title">{song.title}</p>
      </button>
    </li>
  );
}

export default Song;
