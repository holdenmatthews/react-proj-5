import { configureStore } from '@reduxjs/toolkit'
import potentialCountriesReducer from '../redux/slices/potentialCountriesSlice'
import displayedCountryReducer from './slices/displayCountrySlice'
import loadingSliceReducer from './slices/loadingSlice'

export default configureStore({
    reducer: { 
        potentialCountries: potentialCountriesReducer,
        displayedCountry: displayedCountryReducer,
        isLoading: loadingSliceReducer
    }
})