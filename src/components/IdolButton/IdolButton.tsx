import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Idol as IdolI } from "../../types/types";
import "./IdolButton.css";

function IdolButton({
  index,
  idol,
  handleOpenView
}: {
  index: number,
  idol: IdolI,
  handleOpenView: React.MouseEventHandler<HTMLButtonElement>
}) {
  const idAttribute = `idol-button-${index}`;
  return (
    <li className="idol">
      <button
        id={idAttribute}
        className="lovelive-button lovelive-text idol-button"
        aria-label={`open ${idol.name} view`}
        onClick={handleOpenView}
        css={css`
          &:hover {
            background-color: ${idol.button_image.background_color}40;
          }
        `}
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
      </button>
    </li>
  );
}

export default IdolButton;
