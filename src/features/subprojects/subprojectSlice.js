import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { EDNPOINT } from "../Endpoint";

const initialState = {
  tasks: [],
  loading: false,
  error: false,
};

export const getTasks = createAsyncThunk(
  "tasks",
  async (data, { rejectWithValue }) => {
    return await axios
      .get(`${EDNPOINT}/task/${data}`)
      .then((res) => res.data)
      .catch((err) => rejectWithValue(err.response));
  }
);

export const addTask = createAsyncThunk(
  "addTask",
  async (data, { rejectWithValue }) => {
    return await axios
      .post(`${EDNPOINT}/task/${data.projectID}`, {
        taskName: data.taskName,
        description: data.description,
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return rejectWithValue(err.response);
      });
  }
);

export const editTask = createAsyncThunk(
  "editTask",
  async (data, { rejectWithValue }) => {
    return await axios
      .patch(`${EDNPOINT}/task/${data.taskId}`, {
        description: data.description,
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return rejectWithValue(err.response);
      });
  }
);

export const deleteTask = createAsyncThunk(
  "deleteTask",
  async (data, { rejectWithValue }) => {
    return await axios
      .delete(`${EDNPOINT}/task/${data}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return rejectWithValue(err.response);
      });
  }
);

export const subprojectSlice = createSlice({
  name: "subproject",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTasks.fulfilled, (state, { payload }) => {
        state.error = false;
        state.loading = false;
        state.tasks = payload;
      })
      .addCase(getTasks.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(addTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(addTask.fulfilled, (state, { payload }) => {
        state.error = false;
        state.loading = false;
        state.tasks = [...state.tasks, payload];
      })
      .addCase(addTask.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(editTask.fulfilled, (state, { payload }) => {
        state.tasks = state.tasks.map((task) =>
          task._id === payload._id ? payload : task
        );
      })
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        state.tasks = state.tasks.filter((task) => task._id !== payload._id);
      });
  },
});

export default subprojectSlice.reducer;
