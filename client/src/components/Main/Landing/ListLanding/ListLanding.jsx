import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CardLanding from './CardLanding/CardLanding';

const ListLanding = () => {
  const [allLandings, setallLandings] = useState("");

  useEffect(() => {
    getLandings()
  }, []) 

  const getLandings = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/api/astronomy/landings`);
      setallLandings(data)


    } catch (error) {
      console.log(error)
    }

  }

  const deleteLanding = (i) => {
    const remainingLandings = allLandings.filter((land, j) => i !== j)
    setallLandings(remainingLandings)
  }

  //funciones propias del componente: - método .sort

  //búsqueda por nombre 
  // function handleName() {
  //   const orderNames = [...dataLands].sort((a, b) => {
  //     return a.name > b.name ? 1 : -1
  //   })
  //   setdataLands(orderNames);
  // }


  // //búsqueda por masa
  // function handleMass() {
  //   const orderMass = [...dataLands].sort((a, b) => {
  //     return a.mass > b.mass ? 1 : -1
  //   })
  //   setdataLands(orderMass);
  // }

  // //búsqueda por año
  // function handleYear() {
  //   const orderYear = [...dataLands].sort((a, b) => {
  //     return a.year > b.year ? 1 : -1
  //   })
  //   setdataLands(orderYear);
  // }



  return (
    <section>
      {/* //cogemos datos del fetch y los pintamos */}
      <h3 className="text-black text-center font-semibold text-xxl underline my-6 transition hover:text-cyan-700">HERE THEY ARE!</h3>
      {allLandings.length !== 0 ? allLandings.map((data, i) => <CardLanding data={data} key={i} remove={()=>deleteLanding(i)}/>)
        : null}
    </section>
  )

}

export default ListLanding