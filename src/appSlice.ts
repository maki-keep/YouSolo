import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from './app/store';
import { Song as SongI } from "./types/types";

export interface AppState {
  activeOverlayWindow: HTMLDivElement["id"];
  currentSongId: SongI["id"];
}
const initialState: AppState = {
  activeOverlayWindow: "",
  currentSongId: ""
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openAboutWindow: (state) => {
      state.activeOverlayWindow = `about-window`;
    },
    openIdolView: (state, action: PayloadAction<string>) => {
      state.activeOverlayWindow = `idol-view-${action.payload}`;
    },
    closeOverlayWindow: (state) => {
      state.activeOverlayWindow = "";
    },
    clickSong: (state, action: PayloadAction<string>) => {
      state.currentSongId = action.payload;
    }
  }
});

// actions
export const { openAboutWindow, openIdolView, closeOverlayWindow, clickSong } = appSlice.actions;

// selectors
export const selectActiveOverlayWindow = (state: RootState) => state.app.activeOverlayWindow;
export const selectCurrentSongId = (state: RootState) => state.app.currentSongId;

// reducer
export default appSlice.reducer;
