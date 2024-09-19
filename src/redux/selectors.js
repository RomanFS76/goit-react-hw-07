import { createSelector } from "@reduxjs/toolkit";

export const selectLoading = (state) => {
  state.contacts.loading;
};

console.dir(selectLoading)
export const selectError = (state) => {
  state.contacts.error;
};

export const selectContacts = (state) => state.contacts.items;

export const selectNameFilter = (state) => state.filters.name;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filters) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filters.toLowerCase())
    );
  }
);


