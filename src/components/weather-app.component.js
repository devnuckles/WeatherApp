import { useState } from "react";
import search_icon from "../assets/search.png";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import snow_icon from "../assets/snow.png";
import rain_icon from "../assets/rain.png";

const WeatherApp = () => {
    const api_key = "24090a27ad40c483a68078eacdcb0c13";
    const [wicon, setWicon] = useState(clear_icon);

    const handleSearch = async () => {
        const inputElement = document.getElementsByClassName("city-input");

        if (inputElement[0].value === "") {
            return 0;
        }
        const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${inputElement[0].value}&units=Metric&appid=${api_key}`;

        const response = await fetch(api_url);
        const weather_data = await response.json();

        const humidity = document.getElementsByClassName("humidity-percentage");
        const wind = document.getElementsByClassName("wind-speed");
        const temparature = document.getElementsByClassName("current-temp");
        const location = document.getElementsByClassName("current-location");
        const weather_type = document.getElementsByClassName("weather-type");

        humidity[0].innerHTML = weather_data.main.humidity + " %";
        wind[0].innerHTML = Math.floor(weather_data.wind.speed) + " km/h";
        temparature[0].innerHTML = Math.floor(weather_data.main.temp) + " °c";
        location[0].innerHTML = weather_data.name;
        weather_type[0].innerHTML = weather_data.weather[0].main;

        if (
            weather_data.weather[0].icon === "01d" ||
            weather_data.weather[0].icon === "01n"
        ) {
            setWicon(clear_icon);
        } else if (
            weather_data.weather[0].icon === "02d" ||
            weather_data.weather[0].icon === "02n"
        ) {
            setWicon(cloud_icon);
        } else if (
            weather_data.weather[0].icon === "03d" ||
            weather_data.weather[0].icon === "03n"
        ) {
            setWicon(drizzle_icon);
        } else if (
            weather_data.weather[0].icon === "04d" ||
            weather_data.weather[0].icon === "04n"
        ) {
            setWicon(drizzle_icon);
        } else if (
            weather_data.weather[0].icon === "09d" ||
            weather_data.weather[0].icon === "09n"
        ) {
            setWicon(rain_icon);
        } else if (
            weather_data.weather[0].icon === "10d" ||
            weather_data.weather[0].icon === "10n"
        ) {
            setWicon(rain_icon);
        } else if (
            weather_data.weather[0].icon === "13d" ||
            weather_data.weather[0].icon === "13n"
        ) {
            setWicon(snow_icon);
        } else {
            setWicon(clear_icon);
        }
    };
    return (
        <div className="container">
            <div className="header-top">
                <input
                    type="text"
                    className="city-input"
                    placeholder="Type your city name"
                />
                <div
                    className="search-input"
                    onClick={() => {
                        handleSearch();
                    }}
                >
                    <img src={search_icon} alt="search" />
                </div>
            </div>
            <div className="current-weather">
                <img src={wicon} />
            </div>
            <div className="weather-type-wrapper">
                <p className="weather-type"> Clear</p>
            </div>
            <div className="current-temp">0 °c</div>
            <div className="current-location">Search City</div>
            <div className="weather-data-wrapper">
                <div className="element">
                    <img src={humidity_icon} alt="humidity" />
                    <div className="data">
                        <div className="humidity-percentage">0 %</div>
                        <div className="text">humidity</div>
                    </div>
                </div>

                <div className="element">
                    <img src={wind_icon} alt="wind" />
                    <div className="data">
                        <div className="wind-speed">0 Km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherApp;
