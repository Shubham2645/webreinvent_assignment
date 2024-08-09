import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure of the authentication state
export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
}

// Initial state for the authentication slice
const initialState: AuthState = {
  isAuthenticated: false, // User is not authenticated initially
  token: null, // No token initially
};

// Create a slice of the Redux store for authentication
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to handle registration and set authentication token
    registerAction: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },

    // Action to handle login and set authentication token
    loginAction: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },

    // Action to handle logout and clear authentication token
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
});

export const { loginAction, logout, registerAction } = authSlice.actions;

export default authSlice.reducer;
