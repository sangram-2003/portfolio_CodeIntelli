import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// create actions
export const create = createAsyncThunk(
  "create_contact",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${BACKEND_URL}/contacts`, data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// read data
export const getAll = createAsyncThunk(
  "getAll_contact",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${BACKEND_URL}/contacts`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deleteone = createAsyncThunk(
  "deleteone_contact",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`${BACKEND_URL}/contacts/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// update
export const update = createAsyncThunk(
  "update_contact",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.patch(`${BACKEND_URL}/contacts/${data.id}`, data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
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
      .addCase(create.pending, (state) => {
        state.loading = true;
      })
      .addCase(create.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts.push(action.payload);
      })
      .addCase(create.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getAll.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload;
      })
      .addCase(getAll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteone.fulfilled, (state, action) => {
        state.loading = false;
        const id = action.meta.arg;
        state.contacts = state.contacts.filter((item) => item._id !== id);
      })

      .addCase(update.fulfilled, (state, action) => {
        state.loading = false;
        const updated = action.payload;
        state.contacts = state.contacts.map((item) =>
          item._id === updated._id ? updated : item
        );
      });
  },
});

export const contactDetailsActions = contactDetails.actions;
export default contactDetails;
