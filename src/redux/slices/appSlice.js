import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: [],
  isLoading: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addLog(state, action) {
      const newObj = { ...action.payload, log: new Date() };
      state.result.push(newObj);
    },
    clearLog(state) {
      state.result = initialState.result;
    },
    setIsLoading(state) {
      state.isLoading = true;
    },
    stopIsLoading(state) {
      state.isLoading = false;
    },
  },
});

export const { addLog, clearLog, setIsLoading, stopIsLoading } =
  appSlice.actions;
export default appSlice.reducer;

export const addNewObjToResult = obj => async dispatch => {
  try {
    dispatch(setIsLoading());
    await setTimeout(() => {
      dispatch(addLog(obj));
      dispatch(stopIsLoading());
    }, obj.seconds * 1000);
  } catch (error) {
    console.error(error.message);
  }
};
