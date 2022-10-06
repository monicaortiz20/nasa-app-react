import './App.css';
import {BrowserRouter} from 'react-router-dom';
import { landingContext } from './context/landingContext';
import { useState } from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';


function App() {
  const [landings, setLandings] = useState([])

  const landData = {
    landings, 
    setLandings
  }

  return (
    <div className="App">
      {/* //datos que mandamos a los hijos, los recibe cada asteroide*/}
      <landingContext.Provider value = {landData}> 
      <BrowserRouter>
        <Header/>
        <Main/>
      </BrowserRouter>
      </landingContext.Provider>
      <Footer/>
    </div>
  );
}

export default App;
