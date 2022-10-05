import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from './app/store';
import { Song as SongI } from "./types/types";

export interface AppState {
  activeOverlayWindow: HTMLDivElement["id"];
  currentSong: SongI;
}
const initialState: AppState = {
  activeOverlayWindow: "",
  currentSong: {
    id: "",
    title: ""
  }
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openAboutWindow: (state) => {
      state.activeOverlayWindow = `about-window`;
    },
    openIdolView: (state, action: PayloadAction<number>) => {
      state.activeOverlayWindow = `idol-view-${action.payload}`;
    },
    closeOverlayWindow: (state) => {
      state.activeOverlayWindow = "";
    },
    clickSong: (state, action: PayloadAction<SongI>) => {
      state.currentSong = action.payload;
    }
  }
});

// actions
export const { openAboutWindow, openIdolView, closeOverlayWindow, clickSong } = appSlice.actions;

// selectors
export const selectActiveOverlayWindow = (state: RootState) => state.app.activeOverlayWindow;
export const selectCurrentSong = (state: RootState) => state.app.currentSong;

// reducer
export default appSlice.reducer;
