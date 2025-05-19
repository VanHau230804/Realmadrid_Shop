/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../../../services/auth.Service';
import { IAccount } from '../../../types/user.type';

export const loginAuth = createAsyncThunk(
  'auth/loginAuth',
  async (data: IAccount, thunkAPI) => {
    try {
      const auth = await login(data);
      return auth;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
