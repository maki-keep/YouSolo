import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from './app/store';
import { Song as SongI } from "./types/types";

export interface AppState {
  activeIdolView: HTMLDivElement["id"];
  currentSongId: SongI["id"];
}
const initialState: AppState = {
  activeIdolView: "",
  currentSongId: ""
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openView: (state, action: PayloadAction<string>) => {
      state.activeIdolView = `idol-view-${action.payload}`;
    },
    closeView: (state) => {
      state.activeIdolView = "";
    },
    clickSong: (state, action: PayloadAction<string>) => {
      state.currentSongId = action.payload;
      closeView();
    }
  }
});

// actions
export const { openView, closeView, clickSong } = appSlice.actions;

// selectors
export const selectActiveIdolView = (state: RootState) => state.app.activeIdolView;
export const selectCurrentSongId = (state: RootState) => state.app.currentSongId;

// reducer
export default appSlice.reducer;
