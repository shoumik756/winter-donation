import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
    const { userLogin, setUser } = useContext(AuthContext);
    const [showpassword, setShowPassWord] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const emailref = useRef()

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(location?.state?.from || location?.state? location.state : '/' ); 
            })
            .catch((error) => {
                toast.error(` ${error.message}`);
            });
    };

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(location?.state? location.state : '/');
            })
            .catch((error) => {
                alert(` ${error.message}`);
            });
    };

    const handleForgotPassword = () => {
        const email = emailref.current.value;
        navigate('/forgetpassword', { state: { email } });
    };

    return (
        <div className="max-w-screen-xl mx-auto flex justify-center items-center my-20">
            <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-[30px] font-semibold text-center mb-3">
                        Login to Your Account!
                    </h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            ref={emailref}
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            name="password"
                            type={showpassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            className="input input-bordered"
                            required
                        />
                        <p onClick={()=> setShowPassWord(!showpassword)} className='text-[22px]  btn-xs absolute right-4 top-12'>
                            {
                               showpassword ? <FaEye /> : <FaEyeSlash />
                            }
                            
                            </p>
                        <label className="label">
                            <p 
                                onClick={handleForgotPassword} 
                                className="label-text-alt link link-hover cursor-pointer">
                                Forgot password?
                            </p>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-white bg-[#ff6f0f] hover:text-black">
                            Login
                        </button>
                    </div>
                </form>
                <div className="p-8 -mt-10">
                    <p className="text-[14px]">
                        If you do not register, please
                        <NavLink to="/register">
                            <span className="text-[#ff6f0f]"> Register Now</span>
                        </NavLink>
                    </p>
                    <button
                        onClick={handleGoogleLogin}
                        className="btn text-white bg-[#000000] mt-5 w-full hover:text-black"
                    >
                        <FaGoogle className="mr-2" />
                        Login with Google
                    </button>
                </div>
            </div>
            <ToastContainer position='top-center' />
        </div>
    );
};

export default Login;
