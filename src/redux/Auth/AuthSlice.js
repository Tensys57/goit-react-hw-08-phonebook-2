import { createSlice } from '@reduxjs/toolkit';
import { fetchStatus } from '../../constants/fetchStatus';
import { loginThunk } from './AuthOperations';

const initialState = {
  access_token: '',
  status: fetchStatus.Idle,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutAction: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(loginThunk.pending, state => {
        state.status = fetchStatus.Loading;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.status = fetchStatus.Success;
        state.access_token = payload.access_token;
      })
      .addCase(loginThunk.rejected, state => {
        state.status = fetchStatus.Error;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { logoutAction } = authSlice.actions;
