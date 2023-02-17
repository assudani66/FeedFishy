import { createContext, useState } from "react";

export const feedContext = createContext({})


export const FeedContextProvider = (props) =>{
    
const [running,setRunning] = useState(false)

return <feedContext.Provider value = {{running,setRunning}}>
    
    {props.children}
    
    </feedContext.Provider>
}
