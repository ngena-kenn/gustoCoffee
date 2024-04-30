import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import authReducer from './store/auth/authReducer';
import profileReducer from './store/profile/profileReducer';
import reservationReducer from './store/reservation/reservationReducer';
import { configureStore} from '@reduxjs/toolkit';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import userReservationsReducer from './store/userReservation/userReservationSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    reservation: reservationReducer,
    forfaits: reservationReducer,
    userReservations: userReservationsReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  <ToastContainer />
  </Provider>
);
