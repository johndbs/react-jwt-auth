import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        user: {}
    },
    reducers: {
        setCurrentUser: (state, action) => {
            console.log("setCurrentUser", action.payload);
            state.user = action.payload;
        }
    }
});

export const userReducer = userSlice.reducer;
export const {
    setCurrentUser
}= userSlice.actions;
