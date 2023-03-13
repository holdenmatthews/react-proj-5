import { createSlice } from '@reduxjs/toolkit'

export const potentialCountriesSlice = createSlice({
    name: 'potentialCountries',
    initialState: {
        value: [
            {
                name: {
                    common: "America",
                },
            },
        ],
    },
    reducers: {
        setPotentialCountries: () => {},
        deletePotentialCountries: () => {}
    }
})

export const { setPotentialCountries, deletePotentialCountries } = potentialCountriesSlice.actions

export const selectPotentials = (state) => state.potentialCountries.value

export default potentialCountriesSlice.reducer