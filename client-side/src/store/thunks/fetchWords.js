
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:4000/api/v1';

const fetchWords=createAsyncThunk('words/fetchWords',async()=>{

const response = await axios.get(`${API_URL}/words`);

await pause(1000)
return response.data.data.randomWords


})

const pause=(duration)=>{


    return new Promise((resolve, reject) => {
      setTimeout(()=> resolve(), duration);
    })
    
    }
    export { fetchWords };
