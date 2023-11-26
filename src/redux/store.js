import { configureStore } from "@reduxjs/toolkit";
import akoredeReducer from "./akoredeSlice";

export const store = configureStore({
    reducer: {
        akorede: akoredeReducer,
    },
});