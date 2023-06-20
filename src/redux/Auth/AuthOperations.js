import { createAsyncThunk } from '@reduxjs/toolkit';

import { loginUser } from '../../services/contactsService';
import { token } from '../../services/contactsService';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await loginUser(body);
      token.set(`${data.token_type} ${data.access_token}`);
      return data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

// export const loginUser = createAsyncThunk(
//   'auth/login',
//   async ({ email, password }, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('/users/login', { email, password });
//       token.set(data.token);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const logoutUser = createAsyncThunk(
//   'auth/logout',
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('/users/logout');
//       token.unset();
//       // clearAuthHeader();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
