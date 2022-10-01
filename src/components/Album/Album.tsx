import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Album as AlbumI, Idol as IdolI } from "../../types/types";
import "./Album.css";
import Song from "../Song/Song";

function Album({
  album,
  image_color
}: {
  album: AlbumI,
  image_color: IdolI["button_image"]["background_color"]
}) {
  const [showSongs, setShowSongs] = useState(false);
  const handleShowSongs: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (showSongs) {
      setShowSongs(false);
    } else {
      setShowSongs(true);
    }
  };
  return (
    <li className="album">
      <button
        className="lovelive-button lovelive-text album-button"
        name={`${album.title}`}
        aria-label={`view ${album.title}`}
        onClick={handleShowSongs}
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
      <ol
        className="songs"
        style={{
          display: showSongs ? "block" : "none"
        }}
      >
      {album.songs.map((song, index) => (
        <Song
          key={index}
          song={song}
          image_color={image_color}
        />
      ))}
      </ol>
    </li>
  );
}

export default Album;
