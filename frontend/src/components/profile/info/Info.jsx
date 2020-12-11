import React from 'react';
import { useSelector } from 'react-redux';
import { selectSignInState } from '../../signIn/SignInComponent';

import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";



export default function Info(props) {

  const signInState = useSelector(selectSignInState);

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Typography component="p" variant="h6">
          Email: {signInState.currentUser.email}
        </Typography>
        <Typography color="textSecondary" >
        First Name: {signInState.currentUser.firstName}
        </Typography>
        <Typography color="textSecondary">
        Last Name: {signInState.currentUser.lastName}
        </Typography>
      </Grid>
    </React.Fragment>
  );
}