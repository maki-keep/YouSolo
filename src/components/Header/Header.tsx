import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  openAboutWindow,
  clickLanguage,
  selectActiveOverlayWindow,
  selectCurrentLanguage
} from "../../appSlice";
import { Icon } from "@iconify/react";
import "./Header.css";

function Header() {
  const dispatch = useAppDispatch();
  const activeOverlayWindow = useAppSelector(selectActiveOverlayWindow);
  const currentLanguage = useAppSelector(selectCurrentLanguage);
  const [showDropdown, setShowDropdown] = useState(false);
  const handleClickEnglishUS: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(clickLanguage("en-US"));
  };
  const handleClickJapaneseJP: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(clickLanguage("jp-JP"));
  };
  const handleShowDropdown: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (showDropdown) {
      setShowDropdown(false);
    } else {
      setShowDropdown(true);
    }
  };
  const handleOpenAboutWindow: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(openAboutWindow());
  };
  useEffect(() => {
    if (activeOverlayWindow !== "") {
      setShowDropdown(false);
    }
  }, [activeOverlayWindow]);
  return (
    <header>
      <ul>
        <li>
          <button
            id="language-en-us"
            aria-label="change language to English (United States)"
            onClick={handleClickEnglishUS}
            style={{
              opacity: currentLanguage === "en-US" ? ".75" : "1"
            }}
          >
            <Icon
              icon="emojione:flag-for-united-states"
              width="32"
              height="32"
            />
          </button>
        </li>
        <li>
          <button
            id="language-jp-jp"
            aria-label="change language to Japanese (Japan)"
            onClick={handleClickJapaneseJP}
            style={{
              opacity: currentLanguage === "jp-JP" ? ".75" : "1"
            }}
          >
            <Icon
              icon="emojione:flag-for-japan"
              width="32"
              height="32"
            />
          </button>
        </li>
        <li>
          <button
            id="more"
            className="lovelive-button"
            aria-label="open more options"
            onClick={handleShowDropdown}
          >
            <Icon
              icon="ci:more-horizontal"
              color="white"
              width="32"
              height="32"
            />
          </button>
          <div
            className="dropdown"
            style={{
              display: showDropdown ? "block" : "none"
            }}
          >
            <ul>
              <li>
                <button
                  id="about-button"
                  className="dropdown-button"
                  aria-label="see info about YouSolo"
                  onClick={handleOpenAboutWindow}
                >
                  About
                </button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </header>
  );
}

export default Header;
