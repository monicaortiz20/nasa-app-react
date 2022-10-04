import React from 'react';
// import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';

const ListLanding = (landData) => {
//recibimos por props la info a pintar : 'landData'
  


  return (
    //cogemos datos del fetch y los pintamos
    (landData.length !== 0 
        ? <div>
            <h3>{landData.name}</h3>
            <p>{landData.id}</p>
            <p>{landData.nametype}</p>
            <p>{landData.recclass}</p>
            <p>{landData.mass}</p>
            <p>{landData.fall}</p>
            <p>{landData.year}</p>
            <p>{landData.reclat}</p>
            <p>{landData.relong}</p>
            <p>{landData.geolocation}</p>
        </div>
        : null)
  )

  }

export default ListLanding