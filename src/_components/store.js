import { configureStore } from "@reduxjs/toolkit";
import optionsReducer from "./../component/parametrage/optionsSlice";

export const storeApp = configureStore({
  reducer: {
    options: optionsReducer,
  },
});
