import React from 'react';
// import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';

const ListLanding = (data) => {
//recibimos por props la info a pintar : 'data' del padre data={lanData}
  
  const geoData = data.data.geolocation;
  // const longitude = data.data.geolocation.longitude;
  // console.log(latitude, longitude)
  // console.log(geoData)


  return (
    //cogemos datos del fetch y los pintamos
    (data.length !== 0 
        ? <div>
            <h3>{data.data.name}</h3>
            <p>ID: {data.data.id}</p>
            <p>nametype: {data.data.nametype}</p>
            <p>reclass: {data.data.recclass}</p>
            <p>mass: {data.data.mass}</p>
            <p>fall: {data.data.fall}</p>
            <p>year: {data.data.year}</p>
            <p>reclat: {data.data.reclat}</p>
            <p>relong: {data.data.relong}</p>
            <p>latitude: {geoData[0]}</p>
            <p>longitude: {geoData[1]}</p> 
        </div>
        : null)
  )

  }

export default ListLanding