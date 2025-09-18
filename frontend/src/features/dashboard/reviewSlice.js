import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// create actions
export const create = createAsyncThunk(
  "create_review",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:4000/reviews", data);
      return res.data; // axios automatically parses the response as JSON
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message); // handle error properly
    }
  }
);

// read data
export const getAll = createAsyncThunk(
  "getAll_review",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:4000/reviews");
      return res.data; // axios automatically parses the response as JSON
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message); // handle error properly
    }
  }
);

export const deleteone = createAsyncThunk(
  "deleteone_review",
  async (id, { rejectWithValue }) => {
   
    try {
      const res = await axios.delete(`http://localhost:4000/reviews/${id}`);
      return res.data; // axios automatically parses the response as JSON
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message); // handle error properly
    }
  }
);

// update
export const update = createAsyncThunk(
  "update_review",
  async (data, { rejectWithValue }) => {

    
    try {
      
      const res = await axios.patch(`http://localhost:4000/reviews/${data.id}`, data);
      return res.data; // axios automatically parses the response as JSON
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message); // handle error properly
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
      // Create user
      .addCase(create.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(create.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews.push(action.payload);
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
        state.reviews = action.payload;
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
          state.reviews = state.reviews.filter((item) => item._id !== id);
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
        state.reviews = state.reviews.map((item) =>
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

export const reviewDetailsActions = reviewDetails.actions;
export default reviewDetails;

