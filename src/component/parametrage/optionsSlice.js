import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loyaltyCardScan: false,
  loyaltyCardNumber: false,
  phoneNumberAuth: false,
  promoCardNumber: false,
  promoCardScan: false,
  postalCodeRequired: false,
  postalCodeValidation: false,
  articleSearch: false,
};

export const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    toggleOption: (state, action) => {
      const { optionName } = action.payload;
      state[optionName] = !state[optionName];
    },
  },
});

export const { toggleOption } = optionsSlice.actions;

export default optionsSlice.reducer;
