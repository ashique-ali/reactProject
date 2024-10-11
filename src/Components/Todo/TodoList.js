import React, { useRef, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const TodoList = () => {
    const [listData, setListData] = useState([]);
    const [inputValue, setInputvalue] = useState("");
    const inputRef = useRef()
    
    const inputHandler = (e) => {
        setInputvalue(e.target.value);
    };

    const submitHandler = () => {
        setListData([...listData, inputValue]);
        setInputvalue('')
        inputRef.current.focus()
    };

    const deleteHandler = (i) => {
        const filterData = listData.filter((item, index) => {
            return index !== i;
        })
        setListData(filterData);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-5 justify-content-between m-auto bg-info d-flex p-4 rounded rounded-3">
                    <form className="w-100">
                        <div className="form-group">
                            <input className="form-control" type="text" ref={inputRef} value={inputValue} placeholder="Enter Here" onChange={inputHandler} />
                        </div>
                    </form>
                    <div>
                        <button className="btn btn-dark px-3" onClick={submitHandler}>Add</button>
                    </div>
                </div>
                <div>
                    <ul className="list-group col-lg-5 m-auto p-0">
                        {listData?.map((listItem, i) => (
                            <li className="m-0 list-group-item d-flex justify-content-between align-items-center" aria-current="true" key={i}>
                                {listItem}
                                <span className="btn btn-danger" onClick={() => deleteHandler(i)}>
                                    <RiDeleteBin5Line />
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TodoList;
