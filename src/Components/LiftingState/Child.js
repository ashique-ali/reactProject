import React, { useRef, useState } from 'react'

const Child = (props) => {
    const [inputValue, setInputValue] = useState("")
    const elementRef = useRef();

    const changeHandler = (e) => {
        setInputValue(e.target.value);
    }

    const Submit = (e) => {
        e.preventDefault();
        props.getData(inputValue);
        setInputValue('');
        elementRef.current.focus();
    }
    
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-5 m-auto'>
                    <input type='text' ref={elementRef} placeholder='Enter name' value={inputValue} onChange={changeHandler} />
                    <button onClick={Submit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Child
