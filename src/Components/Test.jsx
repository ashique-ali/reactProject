import { useRef, useState } from "react";

const Test = () => {
    const [inputValue, setInputValue] = useState([])
    const [data, setData] = useState([]);
    const refElement = useRef();

    const inputHandler = (e) => {
        const listValue = e.target.value;
        setInputValue(listValue);
    }

    const addHandler = () => {
        setData([...data, inputValue]);
        setInputValue('');
        refElement.current.focus();
    }

    const deleteHandler = (index) => {
        const filter = data.filter((item, i) => {
            return index != i;
        })
        setData(filter);
    }

    return (
        <div className="col-lg-4 m-auto">
            <div className="d-flex gap-3">
                <input type="text" ref={refElement} placeholder="Enter name" value={inputValue} className="form-control" onChange={inputHandler} />
                <button className="btn btn-success w-25" onClick={addHandler}>Add List</button>
            </div>
            <ul>
                {data?.map((item, index) => (
                    <li>
                        {item}
                        <span className="btn btn-danger mx-5 mt-1" onClick={() => deleteHandler(index)}>Delete</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Test;