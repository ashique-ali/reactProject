import { useEffect, useState } from 'react'
import axios from 'axios';

const Product = () => {
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerpage, setItemperPage] = useState(10);
    const indexOfLastitem = currentPage * itemPerpage;
    const indexOfFirstitem = indexOfLastitem - itemPerpage;
    const currentItem = data.slice(indexOfFirstitem, indexOfLastitem);
    const totalpage = Math.ceil(data?.length / itemPerpage);

    const fetchData = async () => {
        try {
            const { data } = await axios({
                url: `https://dummyjson.com/recipes?limit=50`,
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                }
            })
            setData(data.recipes);
        } catch (error) {
            console.log("Something went wrong", error);
        }
    }               

    useEffect(() => {
        fetchData();
    }, [])

    const searchHandler = (e) => {
        const searchValue = e.target.value;
        setSearchData(searchValue);
    }

    const filterData = currentItem?.filter((item) => {
        return item.name.toLowerCase().includes(searchData);
    })

    const previousHandler = () => {
        if(currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const nextHandler = () => {
        if(currentPage < totalpage) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='form-group mb-4 col-lg-5 m-auto shadow p-4 rounded rounded-3'>
                        <input type='text' placeholder='Search Here ...' className='form-control' onChange={searchHandler} />
                    </div>
                    <h4>Product List</h4>
                    <table class="table table-striped shadow" style={{ verticalAlign: "baseline" }}>
                        <thead>
                            <tr>
                                <th className='text-uppercase text-center'>Sr No</th>
                                <th className='text-uppercase text-center'>Name</th>
                                <th className='text-uppercase text-center'>image</th>
                                <th className='text-uppercase text-center'>cuisine</th>
                                <th className='text-uppercase text-center'>reviewCount</th>
                                <th className='text-uppercase text-center'>mealType</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterData && filterData.length > 0 ? (
                                filterData?.map((item, index) => (
                                    <tr key={item.id}>
                                        <td className='text-center'>{(currentPage - 1) * itemPerpage + index + 1}</td>
                                        <td className='text-center'>{item.name}</td>
                                        <td className='text-center' style={{ width: "120px" }}>
                                            <img className='w-100 rounded rounded-3' src={item.image} alt={item.name} />
                                        </td>
                                        <td className='text-center'>{item.cuisine}</td>
                                        <td className='text-center'>{item.reviewCount}</td>
                                        <td className='text-center'>{item.mealType}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td className='text-center fs-4 fw-bold p-5' colSpan="6">Oops Data not found ...!</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className='d-flex justify-content-end gap-1 align-items-center fw-bold pb-4'>
                        <button className='btn btn-success' onClick={previousHandler} disabled={currentPage === 1}>Previous</button>
                            <span>{currentPage}/{totalpage}</span>
                        <button className='btn btn-success' onClick={nextHandler} disabled={currentPage === totalpage}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;