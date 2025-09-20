import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
// create actions
export const create = createAsyncThunk(
  "create_dsa",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${BACKEND_URL}/dsa`, data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// read data
export const getAll = createAsyncThunk(
  "getAll_dsa",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${BACKEND_URL}/dsa`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deleteone = createAsyncThunk(
  "deleteone_dsa",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`${BACKEND_URL}/dsa/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// update
export const update = createAsyncThunk(
  "update_dsa",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.patch(`${BACKEND_URL}/dsa/${data.id}`, data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const dsaDetails = createSlice({
  name: "dsaDetails",
  initialState: {
    dsas: [],
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
        state.dsas.push(action.payload);
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
        state.dsas = action.payload;
      })
      .addCase(getAll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete
      .addCase(deleteone.fulfilled, (state, action) => {
        state.loading = false;
        const id = action.meta.arg;
        state.dsas = state.dsas.filter((item) => item._id !== id);
      })
      .addCase(deleteone.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update
      .addCase(update.fulfilled, (state, action) => {
        state.loading = false;
        const updated = action.payload;
        state.dsas = state.dsas.map((item) =>
          item._id === updated._id ? updated : item
        );
      })
      .addCase(update.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const dsaDetailsActions = dsaDetails.actions;
export default dsaDetails;
