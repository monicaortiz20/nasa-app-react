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
      <h2>CREATE YOUR OWN!</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <form onSubmit={handleSubmit(createNewNea)}>
          <input {...register("designation")} placeholder="designation" label="designation" name="designation" required />
          <input {...register("id")} placeholder="ID" label="id" name="id" required />
          <input {...register("discovery_date")} placeholder="discovery date" label="discovery_date" name="discovery_date" required />
          <input {...register("period_yr")} placeholder="Orbit period" label="Orbit period" name="period_yr"/>
          <input {...register("orbit_class")} placeholder="Orbit class" label="Orbit class" name="orbit_class"/>
          <button size="small" type="submit">Create</button>
        </form>
      </div>
    </div>
  )
}

export default NewNeas;