import React from "react";
import { selectSignInState } from './signIn/SignInComponent';
import { useSelector } from 'react-redux';

import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const signInState = useSelector(selectSignInState);

  const linkStyles = {
    textDecoration: "none",
  };
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          <Link to="/" style={{ ...linkStyles, color: 'black' }}>Cryptocurrency</Link>
        </Typography>
        {!signInState.isSignedIn &&
          <Button color="primary" size="small">
            <Link to="/signIn" style={linkStyles}>
                Sign In
             </Link>
          </Button>
        }
        {signInState.isSignedIn && <div>
          <Button color="primary" size="small">
            <Link to="/profile" style={linkStyles}>
              <i className="fas fa-id-card"></i>
            </Link>
          </Button>
          <Button color="primary" size="small">
            <Link to="/signUp" style={linkStyles}>
              Sign up
            </Link>
          </Button>
        </div>}
      </Toolbar>
    </React.Fragment>
  );
}
