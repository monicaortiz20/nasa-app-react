import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const New = () => {
  const { register, handleSubmit } = useForm(); //instalamos librería para FORM
  const [newLand, setnewLand] = useState("");

  const createLanding = async (newLanding) => {
    const createLandObj = {
      name: newLanding.name,
      id: newLanding.id,
      nametype: newLanding.nametype,
      mass: newLanding.mass,
      fall: newLanding.fall,
      recclass: newLanding.recclass,
      year: newLanding.year,
      reclat: newLanding.reclat,
      reclong: newLanding.reclong,
      geolocation: {
        latitude: newLanding.reclat,
        longitude: newLanding.reclong
      }
    }
    console.log('new landing: ', createLandObj)

    const response = await axios.post('http://localhost:5000/api/astronomy/landings/create', createLandObj)
    const info = response.data;
    console.log('esto es la info de create:', info)

    if (info === "You have created a new land!") {
      setnewLand(createLandObj);
    }
  }


  return (
    <div>
      <h2 className="text-black text-center font-semibold text-xxl underline my-6 transition hover:text-cyan-700">CREATE YOUR OWN!</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <form onSubmit={handleSubmit(createLanding)} className={"flex items-center content-around justify-center flex-col justify-items-center gap-4"}>
          <input {...register("name")} placeholder="Name" label="Name" name="name" required />
          <input {...register("id")} placeholder="ID" label="ID" name="id" required />
          <input {...register("recclass")} placeholder="Recclass" label="Class" name="recclass" required />
          <input {...register("year")} placeholder="Year" type="date" name="year" required />
          <input {...register("nametype")} placeholder="'Valid'" label="nametype" name="nametype" required />
          <input {...register("mass")} placeholder="Mass" label="Weight" name="mass" required />
          <input {...register("fall")} placeholder="'Fell'" label="Fall" name="fall" required />
          <input {...register("reclat")} placeholder="Reclat" label="Latitude" name="reclat" required />
          <input {...register("reclong")} placeholder="Reclong" label="Longitude" name="reclong" required />
          <button size="small" type="submit" className="w-60 my-2 px-2 py-2 bg-slate-400/80 hover:bg-cyan-700 text-slate-100 rounded-lg">Create</button>
        </form>
      </div>
    </div>
  )
}

export default New