import React from "react";
import { useSelector } from "react-redux";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";

const OptionDisplay = () => {
    let currentPotentials = useSelector(selectPotentials)
    console.log(currentPotentials)
    return <div className="stack">{currentPotentials.map((country) => {
        return (
            <h2>{country.name.common}</h2>
        )
    })}</div>;
};

export default OptionDisplay;
