import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reservations: [],
  loading: false,
  error: null,
};

const userReservationsSlice = createSlice({
  name: 'userReservations',
  initialState,
  reducers: {
    fetchReservationsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchReservationsSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.reservations = action.payload;
    },
    fetchReservationsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchReservationsStart,
  fetchReservationsSuccess,
  fetchReservationsFailure,
} = userReservationsSlice.actions;

export default userReservationsSlice.reducer;
