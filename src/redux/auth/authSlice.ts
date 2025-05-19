import { IUser } from '../../types/user.type';
import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';
import { loginAuth } from './thunks/authThunk';
import { toast } from 'react-toastify';

const cookies = new Cookies();

const initialState: {
  data: IUser | null;
  loading: boolean;
  error: string | undefined | null;
} = {
  data: null,
  loading: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    refreshToken: (state, { payload }) => {
      if (state.data && payload.accessToken) {
        state.data.accessToken = payload.accessToken;
      }
    },
    logoutAuth: state => {
      state.error = null;
      state.data = null;
      cookies.remove('refreshToken');
      toast.success('Bạn đã đăng xuất thành công!', { position: 'top-right' });
    }
  },
  extraReducers: builder => {
    builder
      .addCase(loginAuth.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(loginAuth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { refreshToken, logoutAuth } = authSlice.actions;

export default authSlice.reducer;
