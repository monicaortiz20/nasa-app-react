import React from 'react';
import {Route, Routes} from 'react-router-dom'

import Home from './Home/Home';
import Landing from './Landing/Landing';
import Neas from './Neas/Neas';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Landing/>} path='/landing'/>
        <Route element={<Neas/>} path='/neas'/>
      </Routes>
    </main>
  )
}

export default Main