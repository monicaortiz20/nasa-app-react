import React, { useEffect, useContext, useState } from 'react';
// import { landingContext } from '../../../context/landingContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


const Landing = () => {
    const [landings, setLandings] = useState("")

    //estados para Search
    const [filterMap, setfilterMap] = useState(null);
    const [select, setSelect] = useState(null);
    const [option, setOption] = useState(null);

    const landIcon = new L.Icon({
        iconUrl: require('../../../assets/img/cometa.png'),
        iconSize: new L.Point(25, 25),
    })


    useEffect(() => {
        getLandings()
    }, []) //componentDidUpdate, para actualizar estado del componente actual

    const getLandings = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/api/astronomy/landings`);
            //data es del destructuring del fetch
            setLandings(data) //seteamos el estado con 'data' del fetch 

        } catch (error) {
            console.log(error)
        }

    }


    //SEARCH LANDINGS:

    useEffect((select, option) => {
        getFilteredMap(select, option)
    }, [select, option, filterMap])


    const getFilteredMap = async () => {
        try {

            const { data } = await axios.get(`http://localhost:5000/api/astronomy/landings/${select}/${option}`);
            setLandings(data)
            setfilterMap(data)

        } catch (error) {
            console.log(error)
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const select = e.target.select.value;
        const input = e.target.input.value;
        const mayusOption = input.toUpperCase();

        setOption(mayusOption);
        setSelect(select);
        setLandings(filterMap);

        e.target.input.value = "";

    }

    // LIST LANDINGS

    let navigation = useNavigate();
    const handleClick = () => {
        let path = 'list';
        navigation(path);
    }

    // CREATE LANDING

    const changeRoute = () => {
        let path = 'create';
        navigation(path);
    }


    if (landings) {
        return (
            <>
                <div>
                    <h4>Search landings!</h4>
                    <form onSubmit={handleSubmit}>
                        <select name="select">
                            <option value="mass">By mass</option>
                            <option value="class">By class</option>
                        </select>
                        <input id="outlined-basic" label={select} variant="outlined" name="input" />
                        <button variant="outlined" type="submit">Search</button>
                    </form>
                </div>

                <div>
                    <h4>Check all landings</h4>
                    <button variant="outlined" onClick={handleClick}>Landings</button>
                </div>

                <div>
                    <h4>Create your own landing!</h4>
                    <button onClick={changeRoute} variant="outlined" type="submit">Create</button>
                </div>

                <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={true} style={{ width: '100%', height: '500px', marginTop: '30px' }}>
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
                                </ul>
                            </Popup>
                        </Marker>) : null)}
                </MapContainer>

            </>
        )
    }
    else if (filterMap) {
        return (
            <section>
            <section>
                <div>
                    <h4>Search landings!</h4>
                    <form onSubmit={handleSubmit}>
                        <select name="select">
                            <option value="mass">By weight</option>
                            <option value="class">By class</option>
                        </select>
                        <input id="outlined-basic" label={select} variant="outlined" name="input" />
                        <button variant="outlined" type="submit">Submit</button>
                    </form>
                </div>

                <div>
                    <h4>Check all landings</h4>
                    <button variant="outlined" onClick={handleClick}>List</button>
                </div>

                <div>
                    <h4>Create your own landing!</h4>
                    <button onClick={changeRoute} variant="outlined" type="submit">Create</button>
                </div>
            </section>

                <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={true} style={{ width: '100%', height: '500px', marginTop: '30px' }}>
                    <TileLayer
                        attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
                        url="https://api.mapbox.com/styles/v1/mogar99/cl8w4411n000j15prntrktrgw/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibW9nYXI5OSIsImEiOiJja2Z3ZDJoaGQxOXFqMzN0OHBhajdjMXBxIn0.1-1aPslRK9n1m1QAS20q3g"
                    />

                    {filterMap.map((landData, i) => landData.geolocation && landData.reclat && landData.reclong ? (

                        <Marker position={[String(landData.reclat), String(landData.reclong)]} key={i} icon={landIcon} >
                            <Popup>
                                <ul>
                                    <li><h3>{landData.name}</h3></li>
                                    <li><p>ID: {landData.id}</p></li>
                                    <li><p>Nametype: {landData.nametype}</p></li>
                                    <li><p>Reclass: {landData.recclass}</p></li>
                                    <li><p>Mass: {landData.mass}</p></li>
                                </ul>
                            </Popup>
                        </Marker>) : null)}
                </MapContainer>

            </section>
        )
    }
}


export default Landing;

