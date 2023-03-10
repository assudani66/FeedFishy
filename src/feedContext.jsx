import { createContext, useContext, useRef, useState } from "react";


export const feedContext = createContext({})

export const FeedContextProvider = (props) =>{
    
const [running,setRunning] = useState(false)

return <feedContext.Provider value = {{running,setRunning}}>
    
    {props.children}
    
    </feedContext.Provider>
}



export const widthContext = createContext({})

export const WidthContextProvider = (props) => {

    const [highLightedWidth,setHighLightedWidth] = useState(300)
    
    return <widthContext.Provider value={{highLightedWidth,setHighLightedWidth}}>
        {props.children}
    </widthContext.Provider>
}

export const useWidthContext = () => (useContext(widthContext))




export const scoreContext = createContext({})

export const ScoreContextProvider = (props) => {
    const [score,setScore] = useState(0)
    return <scoreContext.Provider value={{score,setScore}}>
        {props.children}
    </scoreContext.Provider> 
}


export const fishPositionContext = createContext({})

export const FishPositionProvider = (props) => {
    const [fishPosition,setFishPosition] = useState(0)

    return(
    <fishPositionContext.Provider value = {{fishPosition,setFishPosition}}>
        {props.children}
    </fishPositionContext.Provider>)
}


export const useFishPostionContext = () => 
    useContext(fishPositionContext)

export const fishElement = createContext()

export const FishElementProvider = (props) => {
    const elementRef = useRef(null)
    return(
        <fishElement.Provider value = {elementRef}>
            {props.children}
        </fishElement.Provider>
    )
} 


export const initialFishPosition = createContext({})

export const InitialFishPositionProvider = (props) => {
    const [initialPosition,setIntialPosition] = useState(0)
    return(
        <initialFishPosition.Provider value = {{initialPosition,setIntialPosition}}>
            {props.children}
        </initialFishPosition.Provider>
    )
}


