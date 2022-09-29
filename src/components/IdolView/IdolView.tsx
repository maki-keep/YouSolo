import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Idol as IdolI } from "../../types/types";
import "./IdolView.css";
import Album from "../Album/Album";

function IdolView({
  index,
  activeIdolView,
  idol,
  handleCloseView,
  handleSelectSong
}: {
  index: number,
  activeIdolView: HTMLDivElement["id"],
  idol: IdolI,
  handleCloseView: React.MouseEventHandler<HTMLButtonElement>
  handleSelectSong: React.MouseEventHandler<HTMLButtonElement>
}) {
  const idAttribute = `idol-view-${index}`;
  return (
    <div
      id={idAttribute}
      className="idol-view"
      style={{
        display: activeIdolView === idAttribute ? "block" : "none"
      }}
    >
      <div
        className="idol-details"
      >
        <img
          src={idol.button_image.url ? require(`../../media/${idol.button_image.url}`) : ""}
          alt={idol.name}
          width="72"
          height="72"
          css={css`
            background-color: ${idol.button_image.background_color};
          `}
        />
        <h2>
          {idol.name}
          <br />
          {idol.name_jp}
        </h2>
      </div>
      <button
        className="close-view"
        onClick={handleCloseView}
      >
        Close view
      </button>
      <div className="albums-container">
        <ol className="albums">
        {idol.albums.map((album, index) => (
          <Album
            key={index}
            album={album}
            image_color={idol.button_image.background_color}
            handleSelectSong={handleSelectSong}
          />
        ))}
        </ol>
      </div>
    </div>
  );
}

export default IdolView;
