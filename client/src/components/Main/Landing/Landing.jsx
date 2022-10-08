import React, { useEffect, useContext } from 'react';
import { landingContext } from '../../../context/landingContext';
import axios from 'axios';

import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Landing = () => {
    const { landings, setLandings } = useContext(landingContext)

    const landIcon = new L.Icon({
        iconUrl: require('../../../assets/gif/land.gif'),
        iconSize: new L.Point(25, 25),
    })


    useEffect(() => {
        getLandings()
    }, []) //componentDidUpdate, para actualizar estado del componente actual

    const getLandings = async () => {
        try {
            if (landings.length === 0) {
                const { data } = await axios.get(`http://localhost:5000/api/astronomy/landings`);
                //data es del destructuring del fetch
                setLandings(data) //seteamos el estado con 'data' del fetch 
            }
            
        } catch (error) {
            console.log(error)
        }

    }


    //SEARCH LANDINGS:
    const handleSubmit = (e) =>{
        e.preventDefault();
        const select = e.target.by.value;
        const option = e.target.option.value;
        const mayusOption = option.toUpperCase();
        setOption(mayusOption);
        setSelect(select);
    
        e.target.option.value="";
    
      }


    return (
        <>
         <div>
          <h4>Search landings!</h4>
          <form onSubmit={handleSubmit}>
            <select name="by">
                <menuitem value="mass">By weight</menuitem>
                <menuitem value="class">By class</menuitem>
            </select>
            <TextField id="outlined-basic" label={select} variant="outlined" name="option"/>
            <button variant="outlined" type="submit">Submit</button>
          </form>
        </div>

        <div>
          <h4>Check all landings</h4>
          <button variant="outlined" onClick={handleClick}>List</button>
        </div>

            <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={true} style={{ width: '100%', height: '500px' }}>
                <TileLayer
                    attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
                    url="https://api.mapbox.com/styles/v1/mogar99/cl8w4411n000j15prntrktrgw/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibW9nYXI5OSIsImEiOiJja2Z3ZDJoaGQxOXFqMzN0OHBhajdjMXBxIn0.1-1aPslRK9n1m1QAS20q3g"
                />

                {landings.map((landData, i) => landData.geolocation && landData.reclat && landData.reclong ? (

                    <Marker position={[String(landData.reclat), String(landData.reclong)]} key={i} icon={landIcon} >
                        <Popup>
                            <ul>
                                <li><h3>{landData.name}</h3></li>
                                <li><p>ID: {landData.id}</p></li>
                                <li><p>Nametype: {landData.nametype}</p></li>
                                <li><p>Reclass: {landData.recclass}</p></li>
                                <li><p>Mass: {landData.mass}</p></li>
                                <li><p>Year: {landData.year}</p></li>
                            </ul>                    
                        </Popup>
                    </Marker>) : null)}
            </MapContainer>

        </>
    )
}


export default Landing;

