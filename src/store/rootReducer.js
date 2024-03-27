import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";


export const rootReducer = combineReducers({
    USER: userReducer
});
