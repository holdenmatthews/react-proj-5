import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";
import { setLoadingTrue, setLoadingFalse } from "../redux/slices/loadingSlice";
import { useDispatch } from 'react-redux'

const Weather = () => {
    let dispatch = useDispatch()
    const [weather, setWeather] = useState();
    let display = useSelector(selectDisplay)
    let latitude = display.capitalInfo.latlng[0]
    let longitude = display.capitalInfo.latlng[1]

    useEffect(() => {

        const options = {
          method: 'GET',
          url: 'https://weatherapi-com.p.rapidapi.com/current.json',
          params: {q: `${latitude}, ${longitude}`},
          headers: {
            'X-RapidAPI-Key': 'a0fc18b998mshb43480af805aa36p1971fejsn1fad90940eb1',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
          }
        };
        dispatch(setLoadingTrue())
        axios.request(options).then(function (response) {
            console.log(response.data);
            setWeather(response.data)
            dispatch(setLoadingFalse())
        }).catch(function (error) {
            console.error(error);
            dispatch(setLoadingFalse())
        });

    }, [])

    return (
        <div>
            <table className="overview-table">
                <tr>
                    <td>Conditions: </td>
                    <td>{weather?.current?.condition?.text}</td>
                </tr>
                <tr>
                    <td>Temperature: </td>
                    <td>{weather?.current.temp_f} degrees F</td>
                </tr>
                <tr>
                    <td>Feels Like: </td>
                    <td>{weather?.current?.feelslike_f}</td>
                </tr>
                <tr>
                    <td>Humidity: </td>
                    <td>{weather?.current?.humidity}</td>
                </tr>
                <tr>
                    <td>Wind Speed: </td>
                    <td>
                        {weather?.current?.wind_mph} mph {" "}
                        {weather?.current?.wind_dir}
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default Weather;
