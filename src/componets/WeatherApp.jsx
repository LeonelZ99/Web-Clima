import React from 'react'
import { useState } from 'react'
import '../styles/weatherStyles.css'

export const WeatherApp = () => {

    //const urlBase = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}'
    const difKelvin = 273.15

    const [ciudad, setCiudad] = useState('')
    const [clima, setClima] = useState(null)


    const handleCambioCiudad = (e) => {
        setCiudad(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (ciudad.length > 0) fetchClima()
    }
    const TemperatureConverter = (kelvin) => {
        return Math.round(kelvin - difKelvin);
    };

    const fetchClima = async () => {
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=9dd686ae05f7eb669b1e670fa17ba149`)
            const data = await response.json()
            setClima(data)
        } catch (error) {
            console.log('Ocurrio el siguiente problema: ', error)
        }
    }


    return (
        <div className='container'>
            <h1>Clima</h1>

            <form onSubmit={handleSubmit} className='buscador'>
                <input type="text" value={ciudad} placeholder='Buscar ciudad' onChange={handleCambioCiudad} />
                <button type="submit">Buscar</button>
            </form>
            {
                clima && (
                    <div>
                        <h2>{clima.name}</h2>
                        <p>Temperatura: {TemperatureConverter(clima.main.temp)}°C</p>
                        <p>Condicion meteorologica: {clima.weather[0].description}</p>
                        <p>Viento: {clima.wind.speed}km/h</p>
                        <p>Humedad: {clima.main.humidity}%</p>
                        <img src={`https://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`} />
                    </div>
                )
            }
        </div>
    )
}
