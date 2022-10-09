import React from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useForm } from "react-hook-form";

const CardNeas = (data) => {
  const nea = data.data

  const { register, handleSubmit } = useForm(); //instalamos librería para FORM


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
    <section>
      <div>
        <h4>{nea.designation}</h4>
        <p>Discovery Date: {nea.discovery_date}</p>
        <p>Peroid year: {nea.period_yr}</p>
        <p>Orbit Class: {nea.orbit_class}</p>
        <button onClick={deleteNea}>Delete</button>
        <Popup trigger={<button>Edit</button>} position="bottom left">
          {close => (
            <div>
              <form onSubmit={handleSubmit(editNea)}>
                <section sx={{ maxWidth: 345 }}>
                  <input {...register("designation")} placeholder="Designation" label="designation" name="designation" required />
                  <input {...register("discovery_date")} placeholder="Discovery date" label="discovery_date" name="discovery_date" required />
                  <input {...register("period_yr")} placeholder="period_yr" label="period_yr" name="period_yr" required />
                  <input {...register("orbit_class")} placeholder="Orbit Class" label="orbit_class" name="orbit_class" required />
                  <button size="small" type="submit">Edit</button>
                </section>
              </form>
            </div>
          )}
        </Popup>
      </div>
    </section>
  )
}

export default CardNeas