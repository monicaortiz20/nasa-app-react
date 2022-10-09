import React from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useForm } from "react-hook-form";

const CardLanding = (data) => {
  const landing = data.data

  const { register, handleSubmit } = useForm(); //instalamos librería para FORM


  //borramos del back por ID:
  const deleteLanding = async () => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/astronomy/landings/delete/${landing.id}`)
      const info = await response.data;
      console.log('esto es info', info)
      console.log('borramos:', landing.id);
      data.remove() // le pasamos por props al hijo
    } catch (error) {
      console.log(error)
    }
  }

  //editamos por ID:
  const editLanding = async (editLand) => {
    try {
      const editLandObj = {
        name: editLand.name,
        id: editLand.id,
        mass: editLand.mass,
        recclass: editLand.recclass,
        year: editLand.year,
        reclat: editLand.reclat,
        reclong: editLand.reclong,
        geolocation: {
          latitude: editLand.reclat,
          longitude: editLand.reclong
        }
      }
      console.log('esto es el front obj', editLandObj)
      //hacemos fetch y pasamos obj editado:
      const response = await axios.put(`http://localhost:5000/api/astronomy/landings/update/${landing.id}`, editLandObj)
      const info = response.data;
      console.log('esto es info de edit', info)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
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
        </div>
      </section>
      <Popup trigger={<button>Edit</button>} position="bottom left">
        {close => (
          <div>
            <form onSubmit={handleSubmit(editLanding)}>
              <input {...register("name")} placeholder="Name*" label="Name" name="name" required/>
              <input {...register("id")} placeholder="ID*" label="ID" name="id" required/>
              <input {...register("recclass")} placeholder="Recclass" label="Class"  name="recclass" />
              <input {...register("mass")} placeholder="Mass" label="Weight" name="mass"/>
              <input {...register("year")} placeholder="Year" type="date"  name="year" />
              <input {...register("reclat")} placeholder="Latitude*" label="Latitude" name="reclat" required/>
              <input {...register("reclong")} placeholder="Longitude*" label="Longitude" name="reclong" required/>
              <button type="submit">Edit</button>
            </form>
          </div>
        )}

      </Popup>
    </>
  )
}

export default CardLanding