import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    //estado para renderizar obj homeData
    const [home, setHome] = useState("")

    useEffect(() => {
        getAPODimg()
    }, []) //componentDidUpdate, para actualizar estado del componente actual

    const getAPODimg = async () => {
        try {
            const NASAAPIKEY = process.env.REACT_APP_APIKEY
            //get picture of the date a APOD
            const { data } = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASAAPIKEY}`);

            //sacamos objeto con la info a pintar
            //data es del destructuring del fetch
            const homeData = {
                url: data.hdurl,
                title: data.title,
                date: data.date,
                explanation: data.explanation,
                copyright: data.copyright
            }
            setHome(homeData) //seteamos el estado con el objeto que sacamos, para actualizar el estado

        } catch (error) {
            console.log(error)
        }

    }

    return (
        //cogemos datos del fetch y los pintamos

        (home.length !== 0 ?
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">What about NASA today?</h1>

                    <p className="max-w-lg mx-auto mt-4 text-gray-500 my-5">
                        Take a look to the Nasa's APOD!
                    </p>
                </div>

                <div>
                    <img className="relative z-10 object-cover w-full rounded-md h-90" src={home.url} alt={home.title} />

                    <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                        <a className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                        {home.title}
                        </a>

                        <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                        {home.explanation}
                        </p>

                        <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
                    </div>
                </div>
            </div>
        </section > : null)
  )
}

export default Home