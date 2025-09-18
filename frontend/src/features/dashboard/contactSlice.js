import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// create actions
export const create = createAsyncThunk(
  "create_contact",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:4000/contacts", data);
      return res.data; // axios automatically parses the response as JSON
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message); // handle error properly
    }
  }
);

// read data
export const getAll = createAsyncThunk(
  "getAll_contact",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:4000/contacts");
      return res.data; // axios automatically parses the response as JSON
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message); // handle error properly
    }
  }
);

export const deleteone = createAsyncThunk(
  "deleteone_contact",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`http://localhost:4000/contacts/${id}`);
      return res.data; // axios automatically parses the response as JSON
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message); // handle error properly
    }
  }
);

// update
export const update = createAsyncThunk(
  "update_contact",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.patch(
        `http://localhost:4000/contacts/${data.id}`,
        data
      );
      return res.data; // axios automatically parses the response as JSON
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message); // handle error properly
    }
  }
);

const contactDetails = createSlice({
  name: "contactDetails",
  initialState: {
    contacts: [],
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
        state.contacts.push(action.payload);
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
        state.contacts = action.payload;
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
        console.log("full", action);
        const id = action.meta.arg;
        console.log(id);
        if (id) {
          state.contacts = state.contacts.filter((item) => item._id !== id);
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
        state.contacts = state.contacts.map((item) =>
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

export const contactDetailsActions = contactDetails.actions;
export default contactDetails;
