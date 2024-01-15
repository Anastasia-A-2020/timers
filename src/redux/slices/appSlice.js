import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addLog(state, action) {
      state.result.push(action.payload);
    },
    clearLog(state) {
      state.result = initialState.result;
    },
  },
});

export const { addLog, clearLog, setIsLoading } = appSlice.actions;
export default appSlice.reducer;

export const addNewObjToResult = obj => async dispatch => {
  try {
    await new Promise(resolve => setTimeout(resolve, obj.button * 1000));
    obj.log = new Date();
    dispatch(addLog(obj));
  } catch (error) {
    return console.log(error.message);
  }
};
