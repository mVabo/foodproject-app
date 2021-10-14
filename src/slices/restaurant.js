import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  activeRestaurant: null,
  restaurants: []
};

const slice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {

  }
});

export const { reducer } = slice;