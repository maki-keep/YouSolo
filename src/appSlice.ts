import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from './app/store';
import { Song as SongI, Language } from "./types/types";

export interface AppState {
  activeOverlayWindow: HTMLDivElement["id"];
  currentSong: SongI;
  currentLanguage: Language;
}
const initialState: AppState = {
  activeOverlayWindow: "",
  currentSong: {
    id: "",
    title: ""
  },
  currentLanguage: "en-US"
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openAboutWindow: (state) => {
      state.activeOverlayWindow = `about-window`;
    },
    openIdolView: (state, action: PayloadAction<number>) => {
      // payload is index of idol item
      state.activeOverlayWindow = `idol-view-${action.payload}`;
    },
    closeOverlayWindow: (state) => {
      state.activeOverlayWindow = "";
    },
    clickSong: (state, action: PayloadAction<SongI>) => {
      state.currentSong = action.payload;
    },
    clickLanguage: (state, action: PayloadAction<Language>) => {
      state.currentLanguage = action.payload;
    }
  }
});

// actions
export const { openAboutWindow, openIdolView, closeOverlayWindow, clickSong, clickLanguage } = appSlice.actions;

// selectors
export const selectActiveOverlayWindow = (state: RootState) => state.app.activeOverlayWindow;
export const selectCurrentSong = (state: RootState) => state.app.currentSong;
export const selectCurrentLanguage = (state: RootState) => state.app.currentLanguage;

// reducer
export default appSlice.reducer;
