import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const [showpassword, setShowPassWord] = useState(false)


    const validatePassword = (password) => {
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const lengthRegex = /.{6,}/;

        if (!uppercaseRegex.test(password)) {
            return 'Password must contain at least one uppercase letter.';
        }
        if (!lowercaseRegex.test(password)) {
            return 'Password must contain at least one lowercase letter.';
        }
        if (!lengthRegex.test(password)) {
            return 'Password must be at least 6 characters long.';
        }
        return '';
    };


    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate('/');
            })
            .catch((error) => {

                toast.error(` ${error.message}`);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        const passwordValidationError = validatePassword(password);
        if (passwordValidationError) {
            setPasswordError(passwordValidationError);
            return;
        }

        setPasswordError('');

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate('/');
                    })
                    .catch(err => {
                  
                        toast.error(err);
                    })
            })
            .catch((error) => {
                console.error('Error Code:', error.code);
                console.error('Error Message:', error.message);
                toast.error(`${error.message, error.code}`);
            });
    };

    return (
        <div className='max-w-screen-xl md:mx-auto flex justify-center items-center my-20 mx-5'>
            <div className="card bg-base-200 w-full max-w-lg shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit} className="card-body">
                    <h1 className='text-[30px] font-semibold text-center mb-3'>Register Now to Login to Your Account!</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password"
                            type={showpassword ? 'text' : 'password'}
                            placeholder="Password"
                            className="input input-bordered"
                            required />
                        <p onClick={()=> setShowPassWord(!showpassword)} className='text-[22px]  btn-xs absolute right-4 top-12'>
                            {
                               showpassword ? <FaEye /> : <FaEyeSlash />
                            }
                            
                            </p>
                        {passwordError && (
                            <span className="text-red-500 text-sm mt-2">{passwordError}</span>
                        )}
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn text-white bg-[#ff6f0f] hover:text-black">Register Now</button>
                    </div>
                </form>
                <div className='p-8 -mt-10'>
                    <p className='text-[14px]'>Already have an account? <NavLink to='/login'><span className='text-[#ff6f0f]'>Login</span></NavLink></p>

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

export default Register;
