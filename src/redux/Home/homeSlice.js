import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getData = createAsyncThunk('Get/characters', async () => {
  const options = {
    method: 'GET',
    url: 'https://game-of-thrones1.p.rapidapi.com/Characters',
    headers: {
      'X-RapidAPI-Key': 'f631eec7b6msha06a2fd4da4381cp1e1d07jsnbe3a03bacb5f',
      'X-RapidAPI-Host': 'game-of-thrones1.p.rapidapi.com',
    },
  };
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error;
  }
});

const initialState = {
  houses: [],
  currentPage: 'Home',
  loading: false,
};

const homeSlice = createSlice({
  name: 'houses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, { payload }) => {
        state.loading = false;
        const filteredHouses = payload
          .map((character) => character.family)
          .filter((family, index, self) => self.indexOf(family) === index);
        state.houses.push(filteredHouses);
      })
      .addCase(getData.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default homeSlice.reducer;
