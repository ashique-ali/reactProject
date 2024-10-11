import React, { useState } from 'react'

const Colorpicker = () => {
    const [color, setColor] = useState("#ddd");
    
    const changeHandler = (e) => {
        setColor(e.target.value);
    }

    return (
        <div className='col-lg-4 m-auto mt-4'>
            <input type='color' value={color} style={{ cursor: "pointer" }} onChange={changeHandler} />
            <div className='d-flex justify-content-center align-items-center rounded rounded-3' style={{width: "200px", height: "200px", border: "1px solid  #000", background: color}}>
                <h4>Hello</h4>
            </div>
        </div>
    )
}

export default Colorpicker
