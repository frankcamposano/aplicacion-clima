import { useEffect, useState } from "react"
import { WeatherForm } from "./WeatherForm"
import { WeatherMainInfo } from "./WeatherMainInfo"
import { Loading } from "./Loading"

import styles from './WeatherApp.module.css'


export const WeatherApp = () => {
    const [Weather, setWeather] = useState(null)

    useEffect(() => {
        loadInfo()
    }, [])

    useEffect(() => {
        document.title = "Weather | " + Weather?.location?.name ?? "";
      }, [Weather]);
    

    async function loadInfo(city='london'){
        try {
            const request = await fetch(
                `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
              );
              const json = await request.json();

              setTimeout(() => {
                setWeather({ ...json });
              }, 1000);
            } catch (e) {
              console.error(e);
            }
          }

    function handleChangeCity(city){
        setWeather(null)
        loadInfo(city);
    }
  return (
    <div className={styles.weatherContainer}>
        <WeatherForm onChangeCity={handleChangeCity}/>
        {Weather?<WeatherMainInfo weather={Weather}/>:<Loading/>}
        
    </div>
  )
}
