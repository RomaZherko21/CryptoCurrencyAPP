import { configureStore } from '@reduxjs/toolkit';

import signInReducer from '../components/signIn/SignInComponent';
import signUpReducer from '../components/signUp/SignUpComponent';


export default configureStore({
  reducer: {
    signIn: signInReducer,
    signUp: signUpReducer,
  },
});
