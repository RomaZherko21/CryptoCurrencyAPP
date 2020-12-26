import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProfileState, onPageChange,onPutUser } from '../../state/profileReducer'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


function TableFields({ item }) {
  const firstNameInput = useRef(null);
  const lastNameInput = useRef(null);
  const dispatch = useDispatch();
  let [buttonText, setButtonText] = useState('Edit')
  return (
    <TableRow>
      <TableCell> {item.email}</TableCell>
      <TableCell> <input ref={firstNameInput} type="text" defaultValue={item.firstName} disabled={true} /></TableCell>
      <TableCell> <input ref={lastNameInput} type="text" defaultValue={item.lastName} disabled={true} /></TableCell>
      <TableCell>  <Button variant="contained" style={{width:'70px'}} onClick={() => {
        firstNameInput.current.disabled = !firstNameInput.current.disabled;
        lastNameInput.current.disabled = !lastNameInput.current.disabled;
        buttonText === 'Edit' ? setButtonText('Save') : setButtonText('Edit');
        if(buttonText === 'Save'){dispatch(onPutUser({email: item.email, firstName: firstNameInput.current.value, lastName: lastNameInput.current.value}))}
      }}>{buttonText}</Button>
      </TableCell>
    </TableRow>
  )
}


export default function UsersList() {

  const profileState = useSelector(selectProfileState);
  const dispatch = useDispatch();
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
            <TableFields item={item} key={item.email}/>
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