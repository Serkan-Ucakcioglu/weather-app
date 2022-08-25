import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "../Features/WeatherSlice";


const store = configureStore({
    reducer: {
        weatherSlice
    }
})

export default store;