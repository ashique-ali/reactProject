import axios from "axios";
import { useEffect, useState } from "react";
import {useDispatch} from 'react-redux'
import { addCart } from "../features/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [apiData, setApiData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchApi = async () => {
    try {
      const { data } = await axios({
        url: `https://fakestoreapi.com/products`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      setApiData(data);
    } catch (error) {
      console.log("Error", error);
    }
  }

  const addItem = () => {
    dispatch(addCart(apiData));
    toast.success('item added to cart');
    navigate('/cart');
  }

  useEffect(() => {
    fetchApi()
  }, []);
  
  return (
    <div className="container mt-4">
      <ToastContainer />
      <div className="row gap-3 justify-content-center">
        {apiData?.map((item) => (
          <div className="col-lg-3 col-sm-12 bg-white shadow">
            <div className="p-2 w-50 h-50 m-auto">
              <img className="w-100 h-100" src={item.image} />
              <p>{item.category}</p>
              <button className="btn btn-dark w-100" onClick={addItem}>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList;