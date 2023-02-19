import { createContext, useContext, useState } from "react";

export const feedContext = createContext({})


export const FeedContextProvider = (props) =>{
    
const [running,setRunning] = useState(false)

return <feedContext.Provider value = {{running,setRunning}}>
    
    {props.children}
    
    </feedContext.Provider>
}



export const widthContext = createContext({})

export const WidthContextProvider = (props) => {

    const [highLightedWidth,setHighLightedWidth] = useState(200)
    
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



