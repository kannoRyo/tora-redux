import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Router from './Router';

import './assets/style.css'
import './assets/reset.css'

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
