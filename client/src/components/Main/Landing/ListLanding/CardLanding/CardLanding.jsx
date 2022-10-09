import React from 'react';
import axios from 'axios';


const CardLanding = (data) => {
  const landing = data.data



  //borramos del back por ID:
  const deleteLanding = async () => {
    try {
      const response  = await axios.delete(`http://localhost:5000/api/astronomy/landings/delete/${landing.id}`)
      const info = await response.data;
      console.log('esto es info', info)
      console.log('borramos:', landing.id);
      data.remove() // le pasamos por props al hijo
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <section>
       <div>
          <h3>{landing.name}</h3>
          <p>ID: {landing.id}</p>
          <p>Nametype: {landing.nametype}</p>
          <p>Reclass: {landing.recclass}</p>
          <p>Mass: {landing.mass}</p>
          <p>Fall: {landing.fall}</p>
          <p>Year: {landing.year}</p>
          <p>Reclat: {landing.reclat}</p>
          <p>Reclong: {landing.reclong}</p>
          <button onClick={deleteLanding}>Delete</button>
          <button>Edit</button>
        </div>
    </section>
  )
}

export default CardLanding