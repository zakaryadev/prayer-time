import { configureStore } from "@reduxjs/toolkit";
import prayerTimeSlice from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    prayerTimeSlice,
  },
});
