import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Router from './Router';

const  App = ()=> {
  const dispatch = useDispatch()
  const selector = useSelector((state)=> state)

  return (
    <>
    <Router />
    </>
  );
}

export default App;
