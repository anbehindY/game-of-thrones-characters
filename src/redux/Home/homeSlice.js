import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getData = createAsyncThunk('Get/characters', async () => {
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
    return response.data;
  } catch (error) {
    return error;
  }
});

const initialState = {
  characters: [],
  families: [],
  searchValue: '',
  currentPage: 'Home',
  loading: false,
};

const homeSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setSearchValue: (state, { payload }) => {
      state.searchValue = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.characters = payload;
        const houses = payload
          .map((character) => character.family)
          .filter(
            (family, index, self) => family.split(' ').length === 2
              && (self.indexOf(family) === index) && (family !== 'Free Folk') && (family !== 'House Lanister'),
          );
        state.families = houses;
      })
      .addCase(getData.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { setSearchValue } = homeSlice.actions;
export default homeSlice.reducer;
