import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// create actions
export const create = createAsyncThunk(
  "create_project",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:4000/projects", data);
      return res.data; // axios automatically parses the response as JSON
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message); // handle error properly
    }
  }
);

// read data
export const getAll = createAsyncThunk(
  "getAll_project",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:4000/projects");
      return res.data; // axios automatically parses the response as JSON
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message); // handle error properly
    }
  }
);

export const deleteone = createAsyncThunk(
  "deleteone_project",
  async (id, { rejectWithValue }) => {
    console.log("api calling" , id);
    try {
      const res = await axios.delete(`http://localhost:4000/projects/${id}`);
      return res.data; // axios automatically parses the response as JSON
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message); // handle error properly
    }
  }
);

// update
export const update = createAsyncThunk(
  "update_project",
  async (data, { rejectWithValue }) => {

    
    try {
      
      const res = await axios.patch(`http://localhost:4000/projects/${data.id}`, data);
      return res.data; // axios automatically parses the response as JSON
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message); // handle error properly
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
      // Create user
      .addCase(create.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(create.fulfilled, (state, action) => {
        state.loading = false;
        state.projects.push(action.payload);
        console.log("User created successfully");
      })
      .addCase(create.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message; // Set error message
        console.log(state.error);
      })
      
      // Show user
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
        state.error = action.payload || action.error.message; // Set error message
        console.log(state.error);
      })
      
      // Delete user
      .addCase(deleteone.pending, (state) => {
        state.loading = true;
        state.error = null;

      })
      .addCase(deleteone.fulfilled, (state, action) => {
        state.loading = false;
        console.log("full" , action);
        const id = action.meta.arg;
        console.log(id);
        if (id) {
          state.projects = state.projects.filter((item) => item._id !== id);
        }
        console.log("User deleted successfully");
      })
      .addCase(deleteone.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message; // Set error message
        console.log(state.error);
      })

      // Update user
      .addCase(update.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(update.fulfilled, (state, action) => {
        state.loading = false;
        const updated = action.payload;
        state.projects = state.projects.map((item) =>
          item._id === updated._id ? updated : item
        );
        console.log("User updated successfully");
      })
      .addCase(update.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message; // Set error message
        console.log(state.error);
      });
  },
});

export const projectDetailsActions = projectDetails.actions;
export default projectDetails;

