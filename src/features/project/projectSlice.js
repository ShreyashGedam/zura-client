import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EDNPOINT } from "../Endpoint";
import axios from "axios";

const initialState = {
  projects: [],
  loading: false,
  error: false,
}; 

export const addProject = createAsyncThunk(
  "addProject",
  async (data, { rejectWithValue }) => {
    return await axios
      .post(`${EDNPOINT}/project/${data.userId}`, { projectName: data.name })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return rejectWithValue(err.response);
      });
  }
); 

export const getProjects = createAsyncThunk(
  "getProject",
  async (data, { rejectWithValue }) => {
    return await axios
      .get(`${EDNPOINT}/project/${data}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return rejectWithValue(err.response);
      });
  }
);

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addProject.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProject.fulfilled, (state, { payload }) => {
        state.error = false;
        state.loading = false;
        state.projects = [...state.projects, payload];
      })
      .addCase(addProject.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProjects.fulfilled, (state, { payload }) => {
        state.error = false;
        state.loading = false;
        state.projects = payload;
      })
      .addCase(getProjects.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export default projectSlice.reducer;
