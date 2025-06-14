import { useState, useRef } from "react"
import "../style.css"


const ToggleBGColor = () => {
    const [mode, setMode] = useState('Dark');
    const handleRef = useRef(null);
    
    const handleClick = () => {
        mode === "Dark" ? (setMode("Light"), handleRef.current.classList.add('move-right'))
        : (setMode("Dark"), handleRef.current.classList.remove('move-right'))
    }

    return (
        <div className={`container ${mode === "Light" ? "light-mode" : "dark-mode"}`}>
            <p>Dark</p>
            <div className="button" id="button" onClick={handleClick}>
                <div className="handle" ref={handleRef}></div>
            </div>
            <p>Light</p>
        </div>
    )
}

export default ToggleBGColor