import { createSlice } from "@reduxjs/toolkit";

export const selectNameFilter = (state) => state.filters.name;

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        (state.loading = false),
          (state.error = null),
          (state.items = action.payload);
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        (state.loading = false), (state.error = action.payload);
      });
  },
});

export const { changeFilter } = slice.actions;
export default slice.reducer;
