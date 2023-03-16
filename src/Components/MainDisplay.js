import React, { useState } from "react";
import Overview from './Overview'
import Weather from './Weather'
import Symbols from './Symbols'
import { useSelector } from 'react-redux'
import { selectLoading } from "../redux/slices/loadingSlice";
import Loading from './Loading'

const MainDisplay = () => {
    let isLoading = useSelector(selectLoading)
    const [view, setView] = useState("Overview");
    return (
        <div className="stack">
            <div className="tab-select">
                <button onClick={() => setView("Overview")}>Overview</button>
                <button onClick={() => setView("Weather")}>
                    Current Weather at Capitol
                </button>
                <button onClick={() => setView("Symbols")}>Symbols</button>
            </div>
            {isLoading ? <Loading /> : null}
            {view === "Overview" && <Overview />}
            {view === "Weather" && <Weather />}
            {view === "Symbols" && <Symbols />}
        </div>
    );
};

export default MainDisplay;
