import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const keyCheck = createAsyncThunk(
  "auth/login",
  async (key, thunkAPI) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=ankara&appid=${key}`
      );
      if (response.status === 200) {
        sessionStorage.setItem("login-key", key);
      }
    } catch (e) {
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

const initialState = {
  key: sessionStorage.getItem("login-key") || null,
  isSuccess: false,
  isError: null,
  isFetching: false,
};

const weatherSlice = createSlice({
  name: "weatherSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(keyCheck.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isError = null;
                return state;
      })
      .addCase(keyCheck.rejected, (state) => {
        state.isError = true;
        state.isSuccess = false;
      })
      .addCase(keyCheck.pending, (state) => {
        state.isFetching = true;
        state.isSuccess = false;      });
  },
});

export default weatherSlice.reducer;
