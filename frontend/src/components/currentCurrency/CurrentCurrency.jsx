import React, { useEffect } from "react";
import { getCurrencyHistory, getCurrencyInfo, selectCurrentCurrency } from "../../state/currentCurrencyReducer";
import { useDispatch, useSelector } from 'react-redux'
import History from './History'
import Chart from './Chart'
import Info from './Info'
import Error from '../Error'


export default function CurrentCurrency() {

  const currentCurrencyState = useSelector(selectCurrentCurrency);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrencyHistory());
    dispatch(getCurrencyInfo());
  }, [dispatch]);

  return (
    <>
      {currentCurrencyState.history.length ? (<>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Chart history={currentCurrencyState.history} />
          <Info info={currentCurrencyState.info} />
        </div>
        <History history={currentCurrencyState.history} name={currentCurrencyState.info.name} /></>)
        : <Error message={'There is no such cryptocurrency'} />}
    </>
  );
}
