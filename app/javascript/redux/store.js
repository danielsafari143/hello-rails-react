import { configureStore } from "@reduxjs/toolkit";
import greetingReducer from "./features/greetings/greetingSlice";

export default configureStore({
   reducer: {
    greetings: greetingReducer
   }
})