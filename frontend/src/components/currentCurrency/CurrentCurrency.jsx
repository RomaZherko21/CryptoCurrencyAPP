import React, { useEffect } from "react";
import {getCurrencyHistory, selectCurrentCurrency } from "./CurrentCurrencyComponent";
import { useDispatch, useSelector } from 'react-redux'
import History from './history/History'
import Chart from './chart/Chart'


export default function CurrentCurrency() {

  const currentCurrencyState = useSelector(selectCurrentCurrency);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrencyHistory());
  },[dispatch]);


  return (
    <>
      <Chart history={currentCurrencyState.history}/>
      <History history={currentCurrencyState.history} name={'FUCK'}/>
    </>
  );
}
