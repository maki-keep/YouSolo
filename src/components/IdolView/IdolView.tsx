import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  closeOverlayWindow,
  selectActiveOverlayWindow,
  selectCurrentLanguage
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
  const dispatch = useAppDispatch();
  const activeOverlayWindow = useAppSelector(selectActiveOverlayWindow);
  const currentLanguage = useAppSelector(selectCurrentLanguage);
  const idAttribute = `idol-view-${index}`;
  const matchIdAttribute = activeOverlayWindow === idAttribute;
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
      <section className="idol-details">
        <img
          src={idol.button_image.url ? require(`../../media/${idol.button_image.url}`) : ""}
          alt={idol.name[currentLanguage]}
          width="72"
          height="72"
        />
        <h2>
          {idol.name[currentLanguage]}
        </h2>
      </section>
      <button
        className="lovelive-button close-overlay"
        onClick={handleCloseOverlayWindow}
        css={css`
          background-color: ${idol.button_image.background_color};
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
