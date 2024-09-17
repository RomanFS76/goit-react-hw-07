import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://66e889f7b17821a9d9dd0872.mockapi.io",
});

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("/contacts");
      console.log(data);
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
      const response = await instance.post("/contacts", values);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.massage);
    }
  }
);
