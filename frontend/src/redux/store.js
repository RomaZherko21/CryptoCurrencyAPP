import { configureStore } from '@reduxjs/toolkit';

import signInReducer from '../components/signIn/SignInComponent';
import signUpReducer from '../components/signUp/SignUpComponent';
import mainPageReducer from '../components/mainPage/MainPageComponent';
import currentCurrencyReducer from '../components/currentCurrency/CurrentCurrencyComponent';
import filterReducer from '../components/mainPage/filters/FilterComponent';

export default configureStore({
  reducer: {
    signIn: signInReducer,
    signUp: signUpReducer,
    mainPage: mainPageReducer,
    currentCurrency: currentCurrencyReducer,
    filter: filterReducer,
  }
});
