import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectProfileState } from './ProfileComponent';

import Info from './Info'
import UsersList from './UsersList'



export default function Profile() {

  // const dispatch = useDispatch();
  // const signUpState = useSelector(selectProfileState);

  return (
    <>
      <h1 style={{textAlign:'center'}}>PROFILE</h1>
      <Info />
      <UsersList />
    </>
  );
}