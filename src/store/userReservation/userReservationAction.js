// userReservationAction.js
import axios from 'axios';
import {
  fetchReservationsStart,
  fetchReservationsSuccess,
  fetchReservationsFailure,
} from './userReservationSlice';

export const fetchUserReservations = (userId) => async (dispatch) => {
  dispatch(fetchReservationsStart());

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/api/reservation/user_reservation/${userId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    dispatch(fetchReservationsSuccess(response.data));
  } catch (error) {
    dispatch(fetchReservationsFailure(error.message));
  }
};

