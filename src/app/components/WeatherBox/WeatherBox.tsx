"use client";

import axios from 'axios';
import {useState, useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const WeatherBox = () => {

const [weather, setWeather] = useState(null)

async function getWeather() {
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=7b6dbd65ebf949b09ee205538242206&q=Puerto Rico&aqi=no`)
        setWeather(response.data)
        console.log(response.data)
    }
    catch (error) {
        toast.error('Error fetching weather data')
        console.error(error)
    }
}

useEffect(() => {
    getWeather()
} , [])

return (
<div className='h-auto lg:h-[75vh] w-[75vw] p-10 text-black rounded-md bg-white border border-base-200'>
    <h1 className='text-3xl font-bold'>Weather Live Statistics:</h1>
    <div className='flex justify-end'>
        <button onClick={getWeather} className='bg-base-200 text-white p-2 rounded-md mt-2 flex gap-2'>
            Refresh Weather
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
        </button>
    </div>
    {weather && (
        <div className='grid'>
            <div className='flex gap-2 items-center'>
                <h2 className='text-xl'>Loaction: {weather.location.name}</h2>
                <img src={weather.current.condition.icon} alt="" />
            </div>
            <div className='grid xl:flex justify-center gap-4'>
                <span className='font-bold border rounded-md p-2 hover:bg-slate-50 transition-all text-4xl'>
                    Temperature C: {weather.current.temp_c}°C
                </span>
                <span className='font-bold border rounded-md p-2 hover:bg-slate-50 transition-all text-4xl'>
                    Temperature F: {weather.current.temp_f}°F
                </span>
                <span className='font-bold border rounded-md p-2 hover:bg-slate-50 transition-all text-4xl'>
                    Wind: {weather.current.wind_kph}km/h
                </span>
                <span className='font-bold border rounded-md p-2 hover:bg-slate-50 transition-all text-4xl'>Condition: {weather.current.condition.text}</span>
            </div>
        </div>
    )}
    <ToastContainer />
</div>
)
}
