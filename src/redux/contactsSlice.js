import { createSlice } from "@reduxjs/toolkit";
import { addContacts, fetchContacts } from "./contactsOps";


const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.loading = true
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false,
        state.error = null,
        state.items = action.payload
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false,
        state.error = action.payload
      })


      .addCase(addContacts.pending, (state, action) => {
        state.loading = true
        
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContacts.rejected, (state, action) => {
        state.loading = false,
        state.error = action.payload
      })
  },
});

export const contactsReducer = slice.reducer;
