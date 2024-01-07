import React from 'react'
import ReactDOM from 'react-dom/client'
import { WeatherApp } from './componets/WeatherApp'
import '../src/styles/weatherStyles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>,
)
