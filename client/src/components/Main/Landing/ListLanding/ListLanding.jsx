import React, { useState, useContext } from 'react';
import { landingContext } from '../../../../context/landingContext';

const ListLanding = (data) => {
  const { dataLands, setdataLands} = useContext(landingContext)
//recibimos por props la info a pintar : 'data' del padre data={lanData}
  
//funciones propias del componente: - método .sort

//búsqueda por nombre 
function handleName() {
  const orderNames = [...dataLands].sort((a, b) => {
    return a.name > b.name ? 1 : -1 })
    setdataLands(orderNames);
}


//búsqueda por masa
function handleMass() {
  const orderMass = [...dataLands].sort((a,b) => {
    return a.mass > b.mass ? 1: -1 })
  setdataLands(orderMass);
}

//búsqueda por año
function handleYear() {
  const orderYear = [...dataLands].sort((a,b)=> {
    return a.year > b.year ? 1 : -1 })
  setdataLands(orderYear);
}

// //eliminar landing
// const deleteLanding = (i) => {
//   const remainingLands = dataLands.filter((j, x) => i !== x)
//   setdataLands(remainingLands);
// }



  return (
    //cogemos datos del fetch y los pintamos
    (data.length !== 0 
        ? <div>
            <h3>{data.data.name}</h3>
            <p>ID: {data.data.id}</p>
            <p>nametype: {data.data.nametype}</p>
            <p>reclass: {data.data.recclass}</p>
            <p>mass: {data.data.mass}</p>
            <p>fall: {data.data.fall}</p>
            <p>year: {data.data.year}</p>
            <p>reclat: {data.data.reclat}</p>
            <p>relong: {data.data.relong}</p> 
        </div>
        : null)
  )

  }

export default ListLanding