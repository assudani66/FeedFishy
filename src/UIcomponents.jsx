import React, { useEffect, useState } from "react"
import { useContext } from "react"
import { feedContext, fishPositionContext, scoreContext, useFishPostionContext, useWidthContext, widthContext } from "./feedContext"

export const Logo = (props) => {
    return(<div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
    <h1 className="logo">{props.name}</h1>
    <p className="subText">Feed her when she Purrrrr.....</p>
    </div>
    )
}

export const Button = (props) => {
    const {running, setRunning} = useContext(feedContext);
    const {highLightedWidth,setHighLightedWidth} = useWidthContext()
    const {fishPosition,setFishPosition} = useFishPostionContext()
    const {score,setScore} = useContext(scoreContext)
    const imageSrc = {
        normal : "https://ik.imagekit.io/Phantomcat20/FeedFishy/Feed_button.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1676660041392",
        clicked : "https://ik.imagekit.io/Phantomcat20/FeedFishy/Feed_button_clicked.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1676660027066"
    }

    const handleFishGauge = () => {
        setRunning(!running)
        setScore(score=> score+1)
        setHighLightedWidth(highLightedWidth => (200*Math.pow(0.7,score)))
        console.log(fishPosition)
    }


    const [buttonSrc,setButtonSrc] = useState(imageSrc.normal)
    return(
    <button className="button"  onClick = {()=> {handleFishGauge() }} onMouseDown={()=>{setButtonSrc(imageSrc.clicked)}} onMouseUp={()=>setButtonSrc(imageSrc.normal)}><img className="button-image" src={buttonSrc}/>
    </button>
    )
}

export const FishGauge = () => {
    const {highLightedWidth,setHighLightedWidth} = useWidthContext()
    const Limits = ["-150px","150px"]
    const {fishPosition,setFishPosition} = useFishPostionContext()
    const [direction,setDirection] = useState(1)

    useEffect(() => {
        const id = setInterval(() => { 
          if (fishPosition >= 150) {
            setDirection(-1)
          } else if (fishPosition <= -150) {
            setDirection(1)
          }
          setFishPosition(fishPosition=> fishPosition + direction);
        }, 10)
        return () => clearInterval(id);
      }, [direction, fishPosition]);
      

    return(
        <div style={{margin_top: "50px"}}>
        <div className="fishGauge">
            <div className="highlightedFishGauge" style={{width: `${highLightedWidth}px`}}>                
            </div>
            <img className="fishIndicator" src="https://ik.imagekit.io/Phantomcat20/FeedFishy/Fishy.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1676541840291" 
                style = {{transform :` translate(${fishPosition}px)`}} 
                />
        </div>
    </div>
    )
}

export const ScoreDisplay = () => {
    const {score,setScore} = useContext(scoreContext)
    return<div className="scoreDisplay">
        <img src="https://ik.imagekit.io/Phantomcat20/FeedFishy/Score.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1676791599242" style={{width : "50px",height :"50px",margin: "-3px 3px"}}/>
        <p className="scoreText">{score<10? "0" + score: score }</p>
    </div>
}