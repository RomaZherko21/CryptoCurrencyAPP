import React from "react";
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

  const linkStyles = {
    textDecoration: "none",
  };
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"  
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          <Link to="/" style={{...linkStyles, color:'black'}}>Cryptocurrency</Link>
        </Typography>
        <Button color="primary" size="small">
          <Link to="/signIn" style={linkStyles}>
            {" "}
            Sign In{" "}
          </Link>
        </Button>
        <Button color="primary" size="small">
          <Link to="/signUp" style={linkStyles}>
            Sign up{" "}
          </Link>
        </Button>
      </Toolbar>
    </React.Fragment>
  );
}
