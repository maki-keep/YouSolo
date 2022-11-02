import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  closeOverlayWindow,
  selectActiveOverlayWindow
} from "../../appSlice";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Idol as IdolI } from "../../types/types";
import { Icon } from "@iconify/react";
import "./IdolView.css";
import Album from "../Album/Album";

function IdolView({
  index,
  idol
}: {
  index: number,
  idol: IdolI
}) {
  const idAttribute = `idol-view-${index}`;
  const activeOverlayWindow = useAppSelector(selectActiveOverlayWindow);
  const matchIdAttribute = activeOverlayWindow === idAttribute;
  const dispatch = useAppDispatch();
  const handleCloseOverlayWindow: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(closeOverlayWindow());
  };
  return (
    <div
      id={idAttribute}
      style={{
        display: matchIdAttribute ? "block" : "none"
      }}
    >
      <div className="idol-details">
        <img
          src={idol.button_image.url ? require(`../../media/${idol.button_image.url}`) : ""}
          alt={idol.name}
          width="72"
          height="72"
        />
        <h2>
          {idol.name}
          <br />
          {idol.name_jp}
        </h2>
      </div>
      <button
        className="lovelive-button close-overlay"
        onClick={handleCloseOverlayWindow}
        css={css`
          background-color: ${idol.button_image.background_color};
          &:hover {
            background-color: ${idol.button_image.background_color}44;
          }
        `}
      >
        <Icon
          icon="ci:close-big"
          color="white"
          width="32"
          height="32"
        />
      </button>
      <div className="albums-container">
        <ol className="albums">
        {idol.albums.map((album, index) => (
          <Album
            key={index}
            album={album}
            image_color={idol.button_image.background_color}
          />
        ))}
        </ol>
      </div>
    </div>
  );
}

export default IdolView;
