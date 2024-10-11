import { useState } from "react";

const Test = () => {
    const [inputValue, setInputvalue] = useState([]);
    const [list, setList] = useState([]);

    const changeHandler = (e) => {
        const value = e.target.value;
        setInputvalue(value);
    }

    const clickHandler = () => {
        setList([...list, inputValue])
    }

    const deleteHandler = (i) => {
        console.log('index', i);
        const deleteItem = list.filter((item, index) => {
            return index !== i;
        })
        setList(deleteItem);
    }

    return (
        <div className="container">
            <div className="col-lg-5 m-auto">
                <div className="form-group d-flex gap-4">
                    <input type="text" placeholder="Enter Name" className="form-control" value={inputValue} onChange={changeHandler} />
                    <button className="btn btn-success" onClick={clickHandler}>Add List</button>
                </div>
                {list.map((listItem, i) => (
                    <ul className="d-flex justify-content-between mt-3">
                        <li>{listItem}</li>
                        <button className="btn btn-danger btn-sm" onClick={() => deleteHandler(i)}>Delete</button>
                    </ul>
                ))}
            </div>
        </div>
    );
};
export default Test;
