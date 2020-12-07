import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";



export default function Info(props) {
  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Typography component="p" variant="h6">
          {props.info.name}
        </Typography>
        <Typography color="textSecondary" >
          Value change in 24 hours: <span style={{ color: 'blue' }}>{Number(props.info.changePercent24Hr).toFixed(2)}%</span>
        </Typography>
        <Typography color="textSecondary">
          Market price, $: <span style={{ color: 'blue' }}>{Number(props.info.priceUsd).toFixed(2)}$</span>
        </Typography>
        <Typography color="textSecondary">
          Quantity of trading volume for last 24 hours: <span style={{ color: 'blue' }}>{Number(props.info.volumeUsd24Hr).toFixed(0)}</span>
        </Typography>
        <Typography color="textSecondary">
          Total quantity of asset issued: <span style={{ color: 'blue' }}>{Number(props.info.supply).toFixed(0)} </span>
        </Typography>
      </Grid>
    </React.Fragment>
  );
}