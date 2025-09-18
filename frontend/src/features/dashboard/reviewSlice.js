import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// Create review
export const create = createAsyncThunk(
  "create_review",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${BACKEND_URL}/reviews`, data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Get all reviews
export const getAll = createAsyncThunk(
  "getAll_review",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${BACKEND_URL}/reviews`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Delete review
export const deleteone = createAsyncThunk(
  "deleteone_review",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`${BACKEND_URL}/reviews/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Update review
export const update = createAsyncThunk(
  "update_review",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.patch(`${BACKEND_URL}/reviews/${data.id}`, data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const reviewDetails = createSlice({
  name: "reviewDetails",
  initialState: {
    reviews: [],
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
        state.reviews.push(action.payload);
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
        state.reviews = action.payload;
      })
      .addCase(getAll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete
      .addCase(deleteone.fulfilled, (state, action) => {
        state.loading = false;
        const id = action.meta.arg;
        state.reviews = state.reviews.filter((item) => item._id !== id);
      })
      .addCase(deleteone.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update
      .addCase(update.fulfilled, (state, action) => {
        state.loading = false;
        const updated = action.payload;
        state.reviews = state.reviews.map((item) =>
          item._id === updated._id ? updated : item
        );
      })
      .addCase(update.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const reviewDetailsActions = reviewDetails.actions;
export default reviewDetails;
