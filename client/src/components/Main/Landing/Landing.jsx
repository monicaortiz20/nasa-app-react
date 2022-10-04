import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ListLanding from './ListLanding/ListLanding';
import { v4 as uuidv4 } from 'uuid';

const Landing = () => {
    //estado para renderizar obj homeData
    const [landings, setLandings] = useState("")
    
    useEffect(()=> {
        getLandings()
    },[]) //componentDidUpdate, para actualizar estado del componente actual

    const getLandings = async ()=> {
        try {
            const {data} = await axios.get(`http://localhost:5000/api/astronomy/landings`);
        // console.log(data);
            //sacamos objeto con la info a pintar
            //data es del destructuring del fetch
            const newLanding = {
              name: data.name, 
              id: data.id,
              nametype: data.nametype,
              recclass: data.recclass,
              mass: data.mass, 
              fall: data.fall, 
              year: data.year, 
              reclat: data.reclat, 
              relong: data.relong, 
              geolocation:data.geolocation
              }

            setLandings(data) //seteamos el estado con 'data' del fetch 

        } catch (error) {
            console.log(error)
        }
        
    }

  return (
    //le pasamos por props al HIJO ListLanding la info
    (landings.length !== 0 
        ? landings.map(landData => <ListLanding data ={landData} key={uuidv4()} />) 
        : null)
  )
}


export default Landing