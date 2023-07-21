import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const API_URL = 'http://localhost:4000/api/v1';

const fetchRank = createAsyncThunk('words/fetchRank', async (score) => {
  try {
    console.log({score})
    const response = await axios.post(`${API_URL}/ranks`, { score });
    return response.data.data.rank; // Return the rank value
  } catch (error) {
    console.error('Error fetching rank:', error);
    throw error;
  }
});

export { fetchRank };
