import React from 'react'
import Child from './Child'

const Liftingstate = () => {
    const getData = (data) => {
        console.log("Data ::>>", data);
    }

    return (
        <>
            <Child getData={getData} />
        </>
    )
}

export default Liftingstate
