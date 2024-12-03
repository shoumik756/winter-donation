import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const UpdateInfo = () => {
    const { updateUserProfile, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdateUserInfo = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
      
        updateUserProfile({ displayName: name, photoURL: photo })
            .then(() => {
                setUser((prevUserInfo) => ({...prevUserInfo,displayName: name, photoURL: photo,
                }));
                toast.success('Profile updated successfully!');
                form.reset();
                navigate('/dashboard');
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className="max-w-screen-xl md:mx-auto flex justify-center items-center my-20 mx-5">
            <div className="card bg-base-200 w-full max-w-lg shrink-0 shadow-2xl">
                <form onSubmit={handleUpdateUserInfo} className="card-body">
                    <h1 className="text-[30px] font-semibold text-center mb-3">
                        Update Your Information
                    </h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            name="photo"
                            type="text"
                            placeholder="Photo URL"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control mt-6">
                        <button
                            type="submit"
                            className="btn text-white bg-[#ff6f0f] hover:text-black"
                        >
                            Update Information
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default UpdateInfo;
