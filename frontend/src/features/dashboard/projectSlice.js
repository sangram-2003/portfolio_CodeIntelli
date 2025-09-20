import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export const create = createAsyncThunk(
  "create_project",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${BACKEND_URL}/projects`, data, {
        headers: {
          "Content-Type": "multipart/form-data",  // 👈 important
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Get all projects
export const getAll = createAsyncThunk(
  "getAll_project",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${BACKEND_URL}/projects`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Delete project
export const deleteone = createAsyncThunk(
  "deleteone_project",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`${BACKEND_URL}/projects/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Update project
export const update = createAsyncThunk(
  "update_project",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.patch(`${BACKEND_URL}/projects/${data.id}`, data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const projectDetails = createSlice({
  name: "projectDetails",
  initialState: {
    projects: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // Create
      .addCase(create.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(create.fulfilled, (state, action) => {
        state.loading = false;
        state.projects.push(action.payload);
      })
      .addCase(create.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Get all
      .addCase(getAll.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      })
      .addCase(getAll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete
      .addCase(deleteone.fulfilled, (state, action) => {
        state.loading = false;
        const id = action.meta.arg;
        state.projects = state.projects.filter((item) => item._id !== id);
      })
      .addCase(deleteone.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update
      .addCase(update.fulfilled, (state, action) => {
        state.loading = false;
        const updated = action.payload;
        state.projects = state.projects.map((item) =>
          item._id === updated._id ? updated : item
        );
      })
      .addCase(update.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const projectDetailsActions = projectDetails.actions;
export default projectDetails;
