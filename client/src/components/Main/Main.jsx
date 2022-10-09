import React from 'react';
import {Route, Routes} from 'react-router-dom'

import Home from './Home/Home';
import Landing from './Landing/Landing';
import List from './Landing/ListLanding/ListLanding'
import Create from './Landing/New/New'
import Neas from './Neas/Neas';
import NewNeas from './Neas/NewNeas/NewNeas';


const Main = () => {
  return (
    <main>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Landing/>} path='/landing'/>
        <Route element={<List/>} path="landing/list" />z
        <Route element={<Create/>} path="landing/new" />
        <Route element={<Neas/>} path='/neas'/>
        <Route element={<NewNeas/>} path='/neas/new'/>
      </Routes>
    </main>
  )
}

export default Main