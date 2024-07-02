import { configureStore } from "@reduxjs/toolkit";
import gitUser from "./getUserSlice";
export const store = configureStore({
  reducer: {
    app: gitUser,
  },
});