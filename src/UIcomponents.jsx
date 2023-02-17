import React, { useState } from "react"
import { useContext } from "react"
import { feedContext } from "./feedContext"

export const Logo = (props) => {
    return(
    <h1 className="logo">{props.name}</h1>
    )
}

export const Button = (props) => {
    const {running, setRunning} = useContext(feedContext);
    return(
    <button className="button"  onClick = {()=> {setRunning(!running) }} >{props.name}</button>
    )
}
