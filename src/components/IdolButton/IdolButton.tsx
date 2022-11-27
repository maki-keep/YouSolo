import React from "react";
import { useAppDispatch } from "../../app/hooks";
import {
  openIdolView
} from "../../appSlice";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Idol as IdolI } from "../../types/types";
import "./IdolButton.css";

function IdolButton({
  index,
  idol
}: {
  index: number,
  idol: IdolI
}) {
  const idAttribute = `idol-button-${index}`;
  const dispatch = useAppDispatch();
  const handleOpenIdolView: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(openIdolView(index));
  };
  return (
    <li className="idol">
      <button
        id={idAttribute}
        className="lovelive-button lovelive-text idol-button"
        aria-label={`open ${idol.name} view`}
        onClick={handleOpenIdolView}
        css={css`
          border-color: ${idol.button_image.background_color};
          & > div:nth-of-type(1) {
            background-color: ${idol.button_image.background_color};
          }
        `}
      >
        <div>
          <img
            src={idol.button_image.url ? require(`../../media/${idol.button_image.url}`) : ""}
            alt={idol.name}
            width="72"
            height="72"
          />
        </div>
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
