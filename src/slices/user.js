import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: null
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  }
});

export const { reducer } = slice;