import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGreetings = createAsyncThunk('get/fetchGreetings' , async () => {
    try {
        const response = await fetch('/api/greetings')
        const data = await response.json()
        return data
    } catch (error) {
        return error
    }
})

const greetingSlice = createSlice({
    name: 'greeting',
    initialState: {
        value: 'daniel'
    }, 
    extraReducers(builder){
        builder
            .addCase(fetchGreetings.fulfilled , (state , action) => {
                state.value = action.payload
            })
    }
});

export default greetingSlice.reducer;
