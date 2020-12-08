import React, { useEffect } from "react";
import { getCurrency, selectCurrentCurrencyArr } from "./MainPageComponent";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import Filters from './filters/Filters'

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Mainpage() {

  const currentCurrencyArr = useSelector(selectCurrentCurrencyArr);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrency());
  }, [dispatch]);

  const classes = useStyles();

  return (
    <>
      <Filters />
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {currentCurrencyArr.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.name} - {item.symbol}
                    </Typography>
                    <Typography>
                      Price, $: {Number(item.priceUsd).toFixed(3)}
                    </Typography>
                    <Typography>
                      Max Supply: {Number(item.maxSupply).toFixed(3)}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      <Link to={`/currentCurrency/${item.id}`} style={{ textDecoration: "none" }}>
                        View
                      </Link>
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </>
  );
}
