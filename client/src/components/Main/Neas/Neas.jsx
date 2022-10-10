import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CardNeas from './CardNeas/CardNeas';


const Neas = () => {

const deleteNea = (i) => {
  let remainingNeas = allNeas.filter((nea,j)=> i !== j)
  setallNeas(remainingNeas)
}

let navigation = useNavigate();
const changeRoute = () => {
  let path = 'new';
  navigation(path);
}

  const [allNeas, setallNeas] = useState("");

  useEffect(() => {
    getNeas()
  }, []) 

  const getNeas = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/api/astronomy/neas`);
      setallNeas(data)


    } catch (error) {
      console.log(error)
    }


  }
  return (
    <section className="flex flex-col items-center justify-center">
    <h1 className="text-black text-center font-semibold text-xxl underline my-6 transition hover:text-cyan-700"> HERE THEY ARE!</h1>

    <div style={{margin:'30px'}}>
      <h4>Create your own Nea!</h4>
      <button onClick={changeRoute} className="w-80 my-2 px-2 py-1 bg-slate-400/80 hover:bg-cyan-900 text-slate-100 rounded-lg" type="submit">Create</button>      
    </div>
    {allNeas.length !== 0 ? allNeas.map((data, i) => <CardNeas data={data} key={i} remove={() => deleteNea(i) }/>)
      : null}
  </section>
  )
}

export default Neas