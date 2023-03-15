import React from 'react'
import { useSelector } from 'react-redux'
import { selectDisplay } from '../redux/slices/displayCountrySlice'

const Overview = () => {
    let currentDisplay = useSelector(selectDisplay)
  return (
    <div className='stack'>
        <h1>{currentDisplay.name.official}</h1>
        <h2>{currentDisplay.name.common}</h2>

        <table className='overview-table'>
            <tr>
                <td>Captiol:</td>
                <td>{currentDisplay.capital.map((e) => {
                    return `${e}`
                })}</td>
            </tr>
            <tr>
                <td>Continent:</td>
                <td>{currentDisplay.continents.map((e) => {
                    return `${e}`
                })}</td>
            </tr>
            <tr>
                <td>Borders:</td>
                <td>{currentDisplay.borders.map((e, i, arr) => {
                    if (i + 1 === arr.length) {
                        return `${e}`
                    } else {
                        return `${e}, `
                    }
                })}</td>
            </tr>
            <tr>
                <td>Landlocked:</td>
                <td>{currentDisplay.landlocked ? "true" : "false"}</td>
            </tr>
            <tr>
                <td>Population:</td>
                <td>{currentDisplay.population}</td>
            </tr>
            <tr>
                <td>UN Member:</td>
                <td>{currentDisplay.unMember ? "true" : "false"}</td>
            </tr>
        </table>
    </div>
  )
}

export default Overview