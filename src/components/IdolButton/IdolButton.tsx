import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./IdolButton.css";

function IdolButton({
  index,
  idol_name,
  idol_name_jp,
  image_color,
  image_url,
  handleOpenView
}: {
  index: number,
  idol_name: string,
  idol_name_jp: string,
  image_color: string,
  image_url: string,
  handleOpenView: React.MouseEventHandler<HTMLButtonElement>
}) {
  const idAttribute = `idol-button-${index}`;
  return (
    <button
      id={idAttribute}
      className="idol-button"
      aria-label={`open ${idol_name} view`}
      onClick={handleOpenView}
    >
      <img
        src={image_url ? require(`../../media/${image_url}`) : ""}
        alt={idol_name}
        width="72"
        height="72"
        css={css`
          background-color: ${image_color};
        `}
      />
      <h2>
        {idol_name}
        <br />
        {idol_name_jp}
      </h2>
    </button>
  );
}

export default IdolButton;
