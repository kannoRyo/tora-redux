import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Router from './Router';
import {Header} from './components/Header/index'

import './assets/style.css'
import './assets/reset.css'

const  App = ()=> {
  const dispatch = useDispatch()
  const selector = useSelector((state)=> state)

  return (
    <>
    <Header />
    <main className="c-main">
      <Router />
    </main>
    </>
  );
}

export default App;
