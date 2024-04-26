import React, { useState } from 'react'
import axios from 'axios';

const Weather = () => {
    const cities = ['Varanasi', 'New York', 'Bangalore', 'Tokyo', 'Paris', 'Sydney', 'Bangkok', 'Moscow', 'Beijing', 'Dubai'];

    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState();

    // React.useEffect=(()=>{

    //     const fetchData = async()=>{
    //         try{
    //             const response = await axios.get(`http://localhost:8080/weather/${city}`);
    //             setWeatherData(response.data);

    //             console.log(response.data);
    //         }
    //         catch(err){
    //             console.log("Error fetching data", err);
    //         }
    //     }

    //     fetchData();
    // },[city])

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/weather/${city}`);
            setWeatherData(response.data);

            console.log(response.data);
        }
        catch (err) {
            console.log("Error fetching data", err);
        }
    }

    // console.log(cities);
    const handleCity = (e) => {
        setCity(e.target.value);
    }

    console.log(weatherData);

    return (
        <div>
            <h1>  Weather </h1>
            <select value={city} onChange={handleCity}>
                <option value="">Select a city</option>
                {cities.map((item, id) => (
                    <option key={id} value={item}> {item}</option>
                ))}
            </select>

            <button onClick={fetchData}>Submit</button>

            {
                weatherData && (
                    <div className="card">
                        <h2>City: {weatherData.cityName}</h2>
                        <p>Temperature: <b>{weatherData.temperature} C</b></p>
                        <p>Weather: <b>{weatherData.description}</b></p>
                        <p>Recommended activities: {weatherData.recommendedActivities.join(',')}</p>
                    </div>
                )
            }

        </div>
    )
}

export default Weather