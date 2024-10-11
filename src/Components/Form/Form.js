import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const [isRegistered, setIsRegistered] = useState(false);
    const [formData, setformData] = useState({ name: "", mobile: "", email: "", password: "" });
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const registeredUsers = [{ email: "", mobile: "" }];
    const [showPassword, setShowpassword] = useState(false);
    const formHandler = (e) => {
        const { name, value } = e.target;
        setformData({
            ...formData,
            [name]: value,
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.mobile || !formData.email || !formData.password) {
            toast.error("all fields are requried");
            return;
        }

        const isAlreadyRegistered = registeredUsers.some(user =>
            user.email === formData.email || user.mobile === formData.mobile
        );

        if (isAlreadyRegistered) {
            toast.error("This email or mobile number is already registered.");
        } else {
            registeredUsers.push({
                email: formData.email,
                mobile: formData.mobile
            });
            toast.success("You are registered!");
        }
    }

    const loginHandler = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        })
    }

    const loginForm = (e) => {
        e.preventDefault();
        if (formData.email !== loginData.email || formData.password !== loginData.password) {
            toast.error("Invalid Credential")
        } else if(!loginData.email || !loginData.password) {
            toast.error("Invalid UserEmail or password")
        } else {
            toast.success("Login Successfully ...!");
        }
    }

    const clickHandler = () => {
        setIsRegistered(!isRegistered);
    }

    const togglePassword = () => {
        setShowpassword(!showPassword);
    }

    return (
        <div className='container'>
            <div className='row'>
                {isRegistered ? (
                    <button className='btn btn-dark m-auto' onClick={clickHandler} style={{ width: "100px" }}>Sign Up</button>
                ) : (
                    <button className='btn btn-dark m-auto' onClick={clickHandler} style={{ width: "100px" }}>Sign In</button>
                )}

                {isRegistered ? (
                    <div className='col-lg-12'>
                        <ToastContainer />
                        <form className='col-lg-5 bg-white m-auto mt-5 shadow p-4 rounded rounded-3' onSubmit={submitHandler}>
                            <div className='form-group'>
                                <input className='form-control' type='text' placeholder='Enter name' id='name' name='name' onChange={formHandler} />
                            </div>
                            <div className='form-group mt-3'>
                                <input className='form-control' type='text' placeholder='Enter mobile' id='mobile' name='mobile' onChange={formHandler} />
                            </div>
                            <div className='form-group mt-3'>
                                <input className='form-control' type='text' placeholder='Enter email' id='email' name='email' onChange={formHandler} />
                            </div>
                            <div className='form-group mt-3'>
                                <input className='form-control' type='password' placeholder='Enter password' id='password' name='password' onChange={formHandler} />
                            </div>
                            <input type='submit' className='form-control btn btn-success mt-4 w-25' value="Sign Up" />
                        </form>
                    </div>
                ) : (
                    <div className='col-lg-12'>
                        <ToastContainer />
                        <form className='col-lg-5 bg-white m-auto mt-5 shadow p-4 rounded rounded-3' onSubmit={loginForm}>
                            <div className='form-group'>
                                <input className='form-control' type='text' placeholder='Enter email' id='email' name='email' onChange={loginHandler} />
                            </div>
                            <div className='form-group mt-3 position-relative'>
                                <input className='form-control' type={showPassword ? 'text' : 'password'}
                                    placeholder='Enter password' id='password' name='password' onChange={loginHandler} />
                                {showPassword ? (
                                    <FaEye className='position-absolute' style={{ top: "40%", right: "10px", cursor: "pointer" }} onClick={togglePassword} />
                                ) : (
                                    <FaEyeSlash className='position-absolute' style={{ top: "40%", right: "10px", cursor: "pointer" }} onClick={togglePassword} />
                                )}
                            </div>
                            <input type='submit' className='form-control btn btn-success mt-4 w-25' value="Sign In" />
                        </form>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Form
