import React, { useState, useEffect, useContext } from 'react';
import { landingContext } from '../../../context/landingContext';
import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

const Landing = () => {
    //estado para renderizar obj homeData
    const {landings, setLandings} = useContext(landingContext)

    // const landIcon = new L.Icon({
    //     iconUrl: require('../../../assets/gif/land.gif'),
    //     iconAnchor: null,
    //     popupAnchor: null,
    //     shadowUrl: null,
    //     shadowSize: null,
    //     shadowAnchor: null,
    //     iconSize: new L.Point(60, 75),
    //     className: 'leaflet-div-icon'
    // })


    useEffect(() => {
        getLandings()
    }, []) //componentDidUpdate, para actualizar estado del componente actual

    const getLandings = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/api/astronomy/landings`);
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
                geolocation: data.geolocation,
            }

            setLandings(data) //seteamos el estado con 'data' del fetch 

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <section>
         {landings.length > 1 ? <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            {console.log(landings)}
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {landings.map((landData, i) => landData.geolocation && landData.reclat && landData.reclong ?

                <Marker position={[landData.geolocation.latitude, landData.geolocation.longitude]} key={i}  >
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> : null)}
        </MapContainer>: null}
                    
        </section>
    )
}


export default Landing