import { useState } from "react"
import styles from './WeatherForm.module.css'
export const WeatherForm = ({onChangeCity}) => {
    const [city, setCity] = useState('')

 /*    function onChange(e){
        const value =e.target.value
        if (value!="") {
            setCity(value)
        }
    } */

    const onChange =(e)=>{
        const value=e.target.value
        if(value!==""){
            setCity(value)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onChangeCity(city);
      };
      
    /* function handleSubmit(e){
        e.preventDefault();
        onChangeCity(city);
    } */
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
        <input type="text" onChange={onChange} className={styles.input}/>
    </form>
  )
}
