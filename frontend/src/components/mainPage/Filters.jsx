import React, { } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { onNameFilter, onPriceFilter, selectFilterParams } from '../../state/filterReducer'
import { onFilterSubmit } from '../../state/mainPageReducer'

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";

export default function Filters() {

  const filterParams = useSelector(selectFilterParams);
  const dispatch = useDispatch();

  return (
    <>
      <form noValidate autoComplete="off" style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
        <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e) => { dispatch(onNameFilter(e.target.value)) }} />
        <div style={{ marginLeft: '20px' }}>
          <Typography id="discrete-slider-small-steps" style={{ color: 'gray' }} gutterBottom>
            Price
          </Typography>
          <Slider
            defaultValue={30000}
            aria-labelledby="discrete-slider-small-steps"
            step={100}
            min={0}
            max={30000}
            valueLabelDisplay="auto"
            style={{ width: '150px' }}
            onChange={(e, value) => {
              dispatch(onPriceFilter(value))
            }}
          />
        </div>
        <Button onClick={() => {
          dispatch(onFilterSubmit(filterParams))
        }} variant="contained" color="primary" style={{ marginLeft: '30px', height: '30px', padding: '0px' }}>
          Select
        </Button>
      </form>
    </>
  );
}
