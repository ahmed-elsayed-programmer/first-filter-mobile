import { AuthState } from "@/constants/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  token: null,
  isLoading: true,
} as AuthState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.token = null;
    },
    finishIntialLoad: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setAuth, logoutSuccess, finishIntialLoad } = authSlice.actions;

export const logout = () => async (dispatch: any) => {
  await AsyncStorage.removeItem("token");
  await AsyncStorage.removeItem("refresh_token");
  dispatch(logoutSuccess());
};

export default authSlice.reducer;
