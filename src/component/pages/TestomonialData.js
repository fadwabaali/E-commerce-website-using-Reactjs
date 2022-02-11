import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../../Redux/actions/productActions';
import Testomonial from './Testomonial';
import './Testomonial.css'

function TestomonialData() {
    const users = useSelector((state) => state.allUsers.users);    
    const dispatch = useDispatch();

    const fetchUsers = async () => {
      const response = await axios
      .get('https://testimonialapi.toolcarton.com/api')
      .catch((err) => {
        console.log("Err: ", err);
      });
      dispatch(setUsers(response.data));
      console.log('users', response.data)
    };

  useEffect(() => {
    fetchUsers();
  },[]);  

  console.log("users :", users);

  return <>
    <Testomonial/>
  </>;
}

export default TestomonialData;
