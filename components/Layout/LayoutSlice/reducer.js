import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./model";

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setMenuOpen: (state) => {
      state.menuOpen = true;
    },
    setMenuClose: (state) => {
      state.menuOpen = false;
    },
    setMenuToggle: (state) => {
      state.menuOpen = !state.menuOpen;
    },
    setShowcase: (state, action) => {
      state.showcase = action.payload;
    },
  },
});

export const { setMenuOpen, setMenuClose, setShowcase, setMenuToggle } =
  layoutSlice.actions;
export default layoutSlice.reducer;
