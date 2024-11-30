import React,{useState} from "react"

function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return(<div className="Color-picker-container">

        <h1 className="Title">Color Picker</h1>

        <div className="Color-display" style={{backgroundColor : color}}>
            <p>Selected color: {color}</p>
        </div>

        <label>select a color: </label>
        <input value={color} type="color" onChange={handleColorChange}/>
    </div>);
}

export default ColorPicker
