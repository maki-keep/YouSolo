import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Album as AlbumI } from "../../types/types";
import "./Album.css";
import Song from "../Song/Song";

function Album({
  album,
  image_color,
  handleSelectSong
}: {
  album: AlbumI,
  image_color: string,
  handleSelectSong: React.MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <li>
      <button
        className="lovelive-button lovelive-text album-button"
        name={`${album.title}`}
        aria-label={`view ${album.title}`}
        css={css`
          &:hover {
            background-color: ${image_color}40;
          }
        `}
      >
        <img
          src={album.image_url ? require(`../../media/${album.image_url}`) : ""}
          alt={album.title}
          height="128"
          css={css`
            background-color: ${image_color};
          `}
        />
        <span className="album-title">{album.title}</span>
        <span className="release-date">{album.release_date}</span>
      </button>
      <ol className="songs">
      {album.songs.map((song, index) => (
        <Song
          key={index}
          song={song}
          image_color={image_color}
          handleSelectSong={handleSelectSong}
        />
      ))}
      </ol>
    </li>
  );
}

export default Album;
