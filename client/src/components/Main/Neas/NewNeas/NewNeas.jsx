import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const NewNeas = () => {
  const { register, handleSubmit } = useForm(); //instalamos librería para FORM
  const [newNeas, setnewNeas] = useState("");

  const createNewNea = async (newNea) => {
    const createNeaObj = {
        designation: newNea.designation,
        id:newNea.id,
        discovery_date: newNea.discovery_date,
        period_yr: newNea.reclat,
        orbit_class: newNea.orbit_class

    }
    console.log('new nea: ', createNeaObj)

    const response = await axios.post('http://localhost:5000/api/astronomy/landings/create', createNeaObj)
    const info = response.data;
    console.log('esto es la info de create:', info)

    if (info === "You have created a new Nea!") {
      setnewNeas(createNeaObj);
    }
  }


  return (
    <div>
      <h2 className="text-black text-center font-semibold text-xxl underline my-6 transition hover:text-cyan-700">CREATE YOUR OWN!</h2>
      <div>
        <form onSubmit={handleSubmit(createNewNea)} className={"flex items-center content-around justify-center flex-col justify-items-center gap-4"} >
          <input {...register("designation")} placeholder="Sesignation" label="designation" name="designation" required />
          <input {...register("id")} placeholder="ID" label="id" name="id" required />
          <input {...register("discovery_date")} placeholder="Siscovery date" label="discovery_date" name="discovery_date" required />
          <input {...register("period_yr")} placeholder="Orbit period" label="Orbit period" name="period_yr"/>
          <input {...register("orbit_class")} placeholder="Orbit class" label="Orbit class" name="orbit_class"/>
          <button size="small" className="w-60 my-2 px-2 py-2 bg-slate-400/80 hover:bg-cyan-700 text-slate-100 rounded-lg" type="submit">Create</button>
        </form>
      </div>
    </div>
  )
}

export default NewNeas;