import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function History(props) {
  return (
    <React.Fragment>
      <Table size="small" style={{width: '90vw', margin: '0 auto'}}>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price, $</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.history.map((item) => (
            <TableRow key={item.date}>
              <TableCell>{item.date}</TableCell>
              <TableCell>{props.name}</TableCell>
              <TableCell align="right">{Number(item.price).toFixed(3)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}