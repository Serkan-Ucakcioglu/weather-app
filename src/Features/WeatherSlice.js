import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    key: 'asda'
}

const weatherSlice = createSlice({
    name:'weatherSlice',
    initialState,
    reducers: {}
})

export default weatherSlice.reducer;
