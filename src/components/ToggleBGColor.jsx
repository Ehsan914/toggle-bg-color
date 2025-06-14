import { useState } from "react"
import "../style.css"


const ToggleBGColor = () => {
    const [mode, setMode] = useState('Dark');
    const [textColor, setTextColor] = useState('white');
    const [backgroundColor, setBackgroundColor] = useState("#232323")

    const handleClick = () => {
        const handle = document.getElementById('handle')
        mode === "Dark" ? (setBackgroundColor("white"), setTextColor("black"),
         setMode("Light"), handle.classList.add('move-right'))
        : (setBackgroundColor("#232323"), setTextColor("white"),
         setMode("Dark"), handle.classList.remove('move-right'))
    }

    return (
        <div className="container" style={{ backgroundColor, color: textColor }}>
            <p>Dark</p>
            <div className="button" id="button" onClick={handleClick}>
                <div className="handle" id="handle"></div>
            </div>
            <p>Light</p>
        </div>
    )
}

export default ToggleBGColor