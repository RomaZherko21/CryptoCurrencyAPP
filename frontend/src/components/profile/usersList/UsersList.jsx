import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProfileState, onPageChange } from '../ProfileComponent'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default function UsersList() {

  const profileState = useSelector(selectProfileState);
  const dispatch = useDispatch();

  const input = useRef(null);

  useEffect(() => {
    dispatch(onPageChange(profileState.currentPage))
  }, [])

  return (
    <React.Fragment>
      <Table size="small" style={{ width: '90vw', margin: '0 auto' }}>
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {profileState.currentUsersList.map((item) => (
            <TableRow key={item.email}>
              <TableCell> <input ref={input} type="text" value={item.email} disabled={true}/></TableCell>
              <TableCell>{item.firstName}</TableCell>
              <TableCell>{item.lastName}</TableCell>
              <TableCell>  <Button variant="contained" onClick={() => {
               input.current.disabled = false;
              }}>Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: '20px' }}
      >
        <Button variant="contained" onClick={() => {
          profileState.currentPage > 1 && dispatch(onPageChange(profileState.currentPage - 1))
        }} style={{ marginRight: '10px' }}>Prev</Button>
        <Button onClick={() => {
          profileState.currentUsersList.length === 6 && dispatch(onPageChange(profileState.currentPage + 1))
        }} variant="contained">Next</Button>
      </Grid>
    </React.Fragment>
  );
}