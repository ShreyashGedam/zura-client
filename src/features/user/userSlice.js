import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { EDNPOINT } from "../Endpoint";

const initialState = {
  user: null,
  loading: false,
  error: false,
};

export const loginUser = createAsyncThunk(
  "auth",
  async (data, { rejectWithValue }) => {
    return await axios
      .post(`${EDNPOINT}/auth`, data)
      .then((res) => {
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        return res.data;
      })
      .catch((err) => {
        return rejectWithValue(err.response);
      });
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async (data, { rejectWithValue }) => {
    return await axios
      .post(`${EDNPOINT}/auth/signup`, data)
      .then((res) => {
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        return res.data;
      })
      .catch((err) => {
        return rejectWithValue(err.response);
      });
  }
);

export const changeName = createAsyncThunk(
  "changeName",
  async (data, { rejectWithValue }) => {
    return await axios
      .patch(`${EDNPOINT}/auth/${data.userId}`, { name: data.name })
      .then((res) => {
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        return res.data;
      })
      .catch((err) => {
        return rejectWithValue(err.response);
      });
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.error = false;
        state.loading = false;
        state.user = payload;
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.error = false;
        state.loading = false;
        state.user = payload;
      })
      .addCase(signup.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(changeName.fulfilled, (state, { payload }) => {
        state.user = payload;
      });
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
