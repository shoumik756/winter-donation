import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { auth } from '../Firebase/firebase.config';
import { useLocation } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';

const ForgetPassword = () => {
    const location = useLocation();
    const [email, setEmail] = useState('');
    useEffect(() => {
        if (location.state?.email) {
            setEmail(location.state.email);
        }
    }, [location]);

    const handleRestPassword = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        if (!email) {
            toast.warning("Please provide a valid email address.");
            return;
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Reset password sent to your email");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className="max-w-screen-xl mx-auto flex justify-center items-center my-20">
            <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleRestPassword} className="card-body">
                    <h1 className="text-[30px] font-semibold text-center mb-3">
                        Reset Password
                    </h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="email"
                            className="input input-bordered"
                            value={email}
                        />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn text-white bg-[#ff6f0f] hover:text-black">
                            Reset Password
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer position='top-center' />
        </div>
    );
};

export default ForgetPassword;
