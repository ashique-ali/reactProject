import React, { useEffect, useState } from 'react'
import axios from "axios"

const EmployeeDetails = () => {
    const [userData, setUserData] = useState([]);
    const [email, setEmail] = useState([]);
    const [selectedValue, setSelectValue] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerpage] = useState(10);
    const lastIndex = currentPage * itemPerPage;
    const firstIndex = lastIndex - itemPerPage;
    const currentItem = userData.slice(firstIndex, lastIndex);
    const totalPage = Math.ceil(userData?.length / itemPerPage);

    const fetchApi = async () => {
        try {
            const { data } = await axios({
                url: `https://dummyjson.com/users`,
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                }
            })
            setUserData(data.users);
            setEmail(data.users);
        } catch (error) {
            console.log("Error ::>>", error);
        }
    }

    const filterHandler = (e) => {
        const selectedValue = e.target.value;
        setSelectValue(selectedValue);
        if (selectedValue === 'Select Email') {
            setUserData(email);
        } else {
            const filterData = email.filter((item) => {
                return item.email === selectedValue;
            })
            setUserData(filterData);
        }
    }

    const previousHandler = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const nextHandler = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
        }
    }

    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center mt-4 mb-3">
                <div className="col-lg-8">
                    <h4 className="m-0">Employee State</h4>
                </div>
                <div className="col-lg-4 form-group">
                    <select className="form-control" value={selectedValue} onChange={filterHandler}>
                        <option>Select Email</option>
                        {email?.map((item, index) => (
                            <option value={item.email} key={index}>{item.email}</option>
                        ))}
                    </select>
                </div>
            </div>
            <table class="table table-striped border" border={1}>
                <thead>
                    <tr>
                        <th scope="col">Sr No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">City</th>
                        <th scope="col">State</th>
                        <th scope="col">Country</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItem?.map((item, index) => (
                        <tr key={index}>
                            <td className='text-center'>{(currentPage - 1) * itemPerPage + index + 1}</td>
                            <td>{item.firstName + " " + item.lastName}</td>
                            <td>{item.age}</td>
                            <td>{item.gender}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.address.city}</td>
                            <td>{item.address.state}</td>
                            <td>{item.address.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="d-flex justify-content-end gap-1 mb-4 mt-4">
                <button className="btn btn-success" onClick={previousHandler} disabled={currentPage === 1}>Previous</button>
                <span className="mt-2 fw-bold">{currentPage}/{totalPage}</span>
                <button className="btn btn-success" onClick={nextHandler} disabled={currentPage === totalPage}>Next</button>
            </div>
        </div>
    )
}

export default EmployeeDetails
