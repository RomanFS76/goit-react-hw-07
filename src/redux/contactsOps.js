import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://66e889f7b17821a9d9dd0872.mockapi1.io",
});

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("/contacts");
      return data;
    } catch (e) {      
      return thunkAPI.rejectWithValue(e.massage);
    }
  }
);

export const addContacts = createAsyncThunk(
  "contacts/addContacts",
  async (values, thunkAPI) => {
    try {
      const {data} = await instance.post("/contacts", values);
      console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteContacts",
  async (contactId, thunkAPI) => {
    try {
      const {data} = await instance.delete(`/contacts/${contactId}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
