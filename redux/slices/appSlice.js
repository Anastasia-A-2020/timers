import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    log: [],
  },
  reducers: {
    addLog(state, action) {
      state.log.push(action.payload);
    },
    clearLog(state) {
      state.log = [];
    },
  },
});

export const { addLog, clearLog } = appSlice.actions;
export default appSlice.reducer;
