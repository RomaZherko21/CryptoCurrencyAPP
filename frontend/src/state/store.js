import { configureStore } from "@reduxjs/toolkit";

import signInReducer from "./signInReducer";
import signUpReducer from "./signUpReducer";
import mainPageReducer from "./mainPageReducer";
import currentCurrencyReducer from "./currentCurrencyReducer";
import filterReducer from "./filterReducer";
import profileReducer from "./profileReducer";

export default configureStore({
  reducer: {
    signIn: signInReducer,
    signUp: signUpReducer,
    mainPage: mainPageReducer,
    currentCurrency: currentCurrencyReducer,
    filter: filterReducer,
    profile: profileReducer,
  },
});
