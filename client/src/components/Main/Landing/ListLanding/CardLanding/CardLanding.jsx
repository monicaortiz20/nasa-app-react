import React from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useForm } from "react-hook-form";



import meteo1 from '../../../../../assets/img/asteroide1.png';
import meteo2 from '../../../../../assets/img/asteroide2.png';
import meteo3 from '../../../../../assets/img/asteroide3.png';
import meteo4 from '../../../../../assets/img/asteroide4.png';
import meteo5 from '../../../../../assets/img/meteorito.png';





const CardLanding = (data) => {
  const landing = data.data

  const { register, handleSubmit } = useForm(); //instalamos librería para FORM

  const allGifs = [meteo1, meteo2, meteo3, meteo4, meteo5];
  const randomGifs = allGifs.sort((a,b) => 0.5 - Math.random());

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
    <section className="flex flex-col flex-wrap justify-center content-center  items-center justify-items-center my-3">
    <a href="#" className="flex flex-col items-center justify-items-center mx-3 bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl lg:px-5   hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img src={randomGifs[0]} className="object-cover w-full h-[100%] rounded-t-lg md:h-auto md:w-60  md:rounded-l-lg  md:rounded-b-lg "  alt=""/>        
      <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{landing.name}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">ID: {landing.id}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{landing.nametype}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Class: {landing.recclass}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Mass: {landing.mass}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Fall: {landing.fall}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Year: {landing.year}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Latitud: {landing.reclat}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Longitud: {landing.reclong}</p>
          <button onClick={deleteLanding} className="w-full my-2 px-2 py-1 bg-slate-400/80 hover:bg-cyan-700 text-slate-100 rounded-lg" type="submit">Delete</button>
          <Popup trigger={<button className="w-full px-2 py-1 bg-slate-400/80 hover:bg-cyan-700  text-slate-100 rounded-lg">Edit</button>} position="bottom left">
            {close => (
              <div>
                <form onSubmit={handleSubmit(editLanding)}>
                  <input {...register("name")} placeholder="Name*" label="Name" name="name" required />
                  <input {...register("id")} placeholder="ID*" label="ID" name="id" required />
                  <input {...register("recclass")} placeholder="Recclass" label="Class" name="recclass" />
                  <input {...register("mass")} placeholder="Mass" label="Weight" name="mass" />
                  <input {...register("year")} placeholder="Year" type="date" name="year" />
                  <input {...register("reclat")} placeholder="Latitude*" label="Latitude" name="reclat" required />
                  <input {...register("reclong")} placeholder="Longitude*" label="Longitude" name="reclong" required />
                  <button type="submit" className="w-full px-2 py-1 bg-slate-400/80 hover:bg-cyan-700  text-slate-100 rounded-lg">Edit</button>
                </form>
              </div>
            )}

          </Popup>
        </div>
      </a>

        </section>
    </>
  )
}

export default CardLanding