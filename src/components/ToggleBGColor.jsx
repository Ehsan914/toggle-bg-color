import { useState, useRef } from "react"
import "../style.css"


const ToggleBGColor = () => {
    const [mode, setMode] = useState('Dark');
    const [textColor, setTextColor] = useState('white');
    const [backgroundColor, setBackgroundColor] = useState("#232323")

    const handleRef = useRef(null);
    
    const handleClick = () => {
        mode === "Dark" ? (setBackgroundColor("white"), setTextColor("black"),
         setMode("Light"), handleRef.current.classList.add('move-right'))
        : (setBackgroundColor("#232323"), setTextColor("white"),
         setMode("Dark"), handleRef.current.classList.remove('move-right'))
    }

    return (
        <div className="container" style={{ backgroundColor, color: textColor }}>
            <p>Dark</p>
            <div className="button" id="button" onClick={handleClick}>
                <div className="handle" ref={handleRef}></div>
            </div>
            <p>Light</p>
        </div>
    )
}

export default ToggleBGColor