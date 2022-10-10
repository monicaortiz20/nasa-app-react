import React from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useForm } from "react-hook-form";

import meteo1 from '../../../../assets/gif/meteo.gif';
import meteo2 from '../../../../assets/gif/meteo2.gif';
import meteo3 from '../../../../assets/gif/meteo3.gif';
import meteo4 from '../../../../assets/gif/meteosimp.gif';
import meteo5 from '../../../../assets/gif/meteo5.gif';

const CardNeas = (data) => {
  const nea = data.data

  const { register, handleSubmit } = useForm(); //instalamos librería para FORM

  const allGifs = [meteo1, meteo2, meteo3, meteo4, meteo5];
  const randomGifs = allGifs.sort((a, b) => 0.5 - Math.random());

  const deleteNea = async () => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/astronomy/neas/delete/${nea.designation}`)
      const info = await response.data;
      console.log('esto es info', info)
      console.log('borramos:', nea.designation);
      data.remove()
    } catch (error) {
      console.log(error)
    }
  }

  const editNea = async (editNea) => {
    try {
      const editNeaObj = {
        designation: editNea.designation,
        discovery_date: editNea.discovery_date,
        period_yr: editNea.period_yr,
        orbit_class: editNea.orbit_class
      }
      console.log('esto es el front obj', editNeaObj)
      //hacemos fetch y pasamos obj editado:
      const response = await axios.put(`http://localhost:5000/api/astronomy/neas/edit/${nea.designation}`, editNeaObj)
      const info = response.data;
      console.log('esto es info de edit', info)

    } catch (error) {
      console.log(error)
    }
  }

  return (
     <>
      <section className="flex flex-col items-center justify-items-center">
        <a className="flex flex-col justify-items-center mx-4 bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl lg:px-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-5">
          <img src={randomGifs[0]} className="object-cover w-full h-[100%] rounded-t-lg md:h-auto md:w-60  md:rounded-l-lg  md:rounded-b-lg" />        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{nea.designation}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Discovery Date: {nea.discovery_date}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Peroid year: {nea.period_yr}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Orbit Class: {nea.orbit_class}</p>

            <button onClick={deleteNea} className="w-full my-2 px-2 py-1 bg-slate-400/80 hover:bg-cyan-700 text-slate-100 rounded-lg" type="submit">Delete</button>
            <Popup trigger={<button className="w-full px-2 py-1 bg-slate-400/80 hover:bg-cyan-700  text-slate-100 rounded-lg">Edit</button>} position="bottom left">
              {close => (
                <div>
                  <form onSubmit={handleSubmit(editNea)}>
                    <section sx={{ maxWidth: 345 }}>
                      <input {...register("designation")} placeholder="Designation" label="designation" name="designation" required />
                      <input {...register("discovery_date")} placeholder="Discovery date" label="discovery_date" name="discovery_date" required />
                      <input {...register("period_yr")} placeholder="period_yr" label="period_yr" name="period_yr" required />
                      <input {...register("orbit_class")} placeholder="Orbit Class" label="orbit_class" name="orbit_class" required />
                      <button size="small" className="w-full my-2 px-2 py-1 bg-slate-400/80 hover:bg-cyan-700 text-slate-100 rounded-lg" type="submit">Edit</button>
                    </section>
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

export default CardNeas