import React from 'react';
import { LineChart, Line, XAxis, Tooltip, CartesianGrid } from 'recharts';

export default function Chart(props) {

  let data = [];
  for (let item of props.history) {
    let date = item.date.split('T')[0];
    let price = Number(item.priceUsd).toFixed(3)
    data.push({
      price,
      date
    })
  }

  return (
    <React.Fragment>
      <LineChart
        width={400}
        height={400}
        data={data.reverse()}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="date" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="price" stroke="#ff7300" yAxisId={0} />
      </LineChart>
    </React.Fragment>
  );
}