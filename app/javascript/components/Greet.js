import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {fetchGreetings} from '../redux/features/greetings/greetingSlice'
import {useSelector } from "react-redux/es/hooks/useSelector";

export default function Greeting() {
    const dispatch = useDispatch();
    const greetings = useSelector(state =>  state.greetings.value )
    useEffect(() => {
        dispatch(fetchGreetings())
    } , [dispatch])
    
    return <h1>{greetings.text}</h1>
}