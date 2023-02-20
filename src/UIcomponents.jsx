import React, { useEffect, useState } from "react"
import { useContext,useRef } from "react"
import { feedContext, fishElement, scoreContext, useFishPostionContext, useWidthContext, initialFishPosition} from "./feedContext"

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
    const {initialPosition,setIntialPosition} = useContext(initialFishPosition)
    const [Limit1,setLimit1] = useState(50)
    const [Limit2,setLimit2] = useState(250)
    const elementRef = useContext(fishElement)
    const [disabled, setDisabled] = useState(false);
    
    const imageSrc = {
        normal : "https://ik.imagekit.io/Phantomcat20/FeedFishy/Feed_button.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1676660041392",
        clicked : "https://ik.imagekit.io/Phantomcat20/FeedFishy/Feed_button_clicked.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1676660027066",
        disabled : "https://ik.imagekit.io/Phantomcat20/FeedFishy/Feed_button_disabled.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1676904253397"
    }
    
    // useEffect(()=>{
    //     console.log((200-highLightedWidth)/2)
    //     console.log("Limits",Limit1,Limit2)
    //     console.log("highlighted Width", highLightedWidth)
    //     console.log("FishPosition",fishPosition)
    //     console.log("running",running)
    // }, [Limit1,Limit2,highLightedWidth,fishPosition])

    const handleFishGauge = () => {
        if (disabled) {
            return;
        }

        setScore(prevScore => prevScore + 1);
        setLimit1((50 + (200 - highLightedWidth) / 2));
        setLimit2(250 - (200 - highLightedWidth) / 2);

        const element = elementRef.current;
        const rect = element.getBoundingClientRect();
        setFishPosition(rect.x - initialPosition);

        if (fishPosition >= Limit1 && fishPosition <= Limit2) {
            setRunning(true);
            setHighLightedWidth(prevWidth => 200 * Math.pow(0.7, score));
            setDisabled(true);
            setButtonSrc(imageSrc.clicked);
            setTimeout(() => {
                setDisabled(false);
                setButtonSrc(imageSrc.normal);
            }, 3000);
        } else {
            setRunning(false);
        }
    }

    const [buttonSrc, setButtonSrc] = useState(imageSrc.normal);
    return (
        <button className="button" onClick={handleFishGauge} onMouseDown={() => setButtonSrc(imageSrc.clicked)} onMouseUp={() => setButtonSrc(imageSrc.normal)} disabled={disabled}>
            <img className="button-image" src={disabled ? imageSrc.disabled : buttonSrc} alt="Feed Fish Button"/>
        </button>
    )
}



export const FishGauge = () => {
    const {highLightedWidth} = useWidthContext()
    const elementRef = useContext(fishElement)
    const {initialPosition,setIntialPosition} = useContext(initialFishPosition)
 useEffect(()=>{
    const element = elementRef.current;
    const rect = element.getBoundingClientRect();
    setIntialPosition(rect.x)
 },[initialPosition])

    return(
        <div style={{margin_top: "50px"}}>
        <div className="fishGauge">
            <div className="highlightedFishGauge" style={{width: `${highLightedWidth}px`}}>                
            </div>
            <img className="Frame_3" ref={elementRef} src="https://ik.imagekit.io/Phantomcat20/FeedFishy/Fishy.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1676541840291" 
                />
        </div>
    </div>
    )
}

export const ScoreDisplay = () => {
    const {score} = useContext(scoreContext)
    
    return<div className="scoreDisplay">
        <img src="https://ik.imagekit.io/Phantomcat20/FeedFishy/Score.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1676791599242" style={{width : "50px",height :"50px",margin: "-3px 3px"}}/>
        <p className="scoreText">{score<10? "0" + score: score }</p>
    </div>
}
export const Tutorial = () => {

    const {score} = useContext(scoreContext)
    const [tutorial,setTutorial] = useState(true)
    
    return(
        <div className={score<1?'tutorial':'tutorialTextHidden'} onClick={()=>setTutorial(false)} ><div className='tutorialContainer'>
        <img src='https://ik.imagekit.io/Phantomcat20/FeedFishy/Tutorial.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1676916952884' 
            className = 'tutorialText'
        />
                        </div>
                </div>
    )
}