import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Home = () => {
    //estado para renderizar obj homeData
    const [home, setHome] = useState("")
    
    useEffect(()=> {
        getAPODimg()
    },[]) //componentDidUpdate, para actualizar estado del componente actual

    const getAPODimg = async ()=> {
        try {
            const NASAAPIKEY = process.env.REACT_APP_APIKEY
            //get picture of the date a APOD
            const {data} = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASAAPIKEY}`);
        
            //sacamos objeto con la info a pintar
            //data es del destructuring del fetch
            const homeData = {
                url: data.hdurl,
                title: data.tile,
                date: data.date,
                explanation: data.explanation,
                copyright: data.copyright
            }
            setHome(homeData) //seteamos el estado con el objeto que sacamos, para actualizar el estado

        } catch (error) {
            console.log(error)
        }
        
    }

  return (
    //cogemos datos del fetch y los pintamos
    (home.length !== 0 
        ? <div>
            <img src={home.url} alt={home.title} />
            <h2>{home.title}</h2>
            <p>{home.date}</p>
            <p>{home.explanation}</p>
            <p>{home.copyright}</p>
        </div>
        : null)
  )
}

export default Home