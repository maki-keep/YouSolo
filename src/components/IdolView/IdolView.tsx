import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Song as SongI } from "../../types/types";
import "./IdolView.css";
import Song from "../Song/Song";

function IdolView({
  index,
  activeIdolView,
  idol_name,
  idol_name_jp,
  image_color,
  image_url,
  songs,
  handleSelectSong
}: {
  index: number,
  activeIdolView: HTMLDivElement["id"],
  idol_name: string,
  idol_name_jp: string,
  image_color: string,
  image_url: string,
  songs: SongI[],
  handleSelectSong: React.MouseEventHandler<HTMLButtonElement>
}) {
  const idAttribute = `idol-view-${index}`;
  return (
    <div
      id={idAttribute}
      className={`idol-view${activeIdolView === idAttribute ? " active" : ""}`}
    >
      <div
        className="idol-details"
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
      </div>
      <ol className="songs">
      {songs.map(song => (
        <Song
          key={song.id}
          song={song}
          handleSelectSong={handleSelectSong}
        />
      ))}
      </ol>
    </div>
  );
}

export default IdolView;
