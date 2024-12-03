import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { GrStatusGood } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';

const DonationCampDetails = () => {
    const { title, image, description, status, contactInfo, division } = useLoaderData();

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Thank you ! We will reach your destination soon!");
        e.target.reset();
    };

    return (
        <div className='max-w-screen-xl md:mx-auto mx-5 my-20 px-5 md:p-0 p-5 lg:px-0 grid md:grid-cols-2 border border-[#ff6f0f] rounded-2xl '>
            <div className=' h-[600px]'>
                <div className="card bg-base-100 image-full shadow-xl h-full">
                    <figure>
                        <img className='w-full'
                            src={image}
                            alt={title} />
                    </figure>
                    <div className="card-body justify-center items-center text-center space-y-2">
                        <h2 className="text-white text-[35px] font-bold">{title}</h2>
                        <h2 className="text-white">{description}</h2>
                        <h2
                            className={`text-white w-[140px] h-[40px] flex justify-center items-center rounded-3xl gap-1 ${status === "Ongoing" ? "bg-[#ff6f0f]" : "bg-red-500"
                                }`}
                        >
                            <GrStatusGood />
                            {status}
                        </h2>
                        <h2 className="text-white gap-2 flex justify-center items-center"><FaPhoneAlt />{contactInfo}</h2>
                        <h2 className="text-white gap-2 flex justify-center items-center"><FaLocationDot /> {division}</h2>
                    </div>
                </div>
            </div>

            <div className=' h-[600px]'>
                <div className="card bg-base-100  p-5 pt-5">
                    <div className=''>
                        <h2 className='text-center text-[30px] font-medium '>Donation Form Field</h2>
                    </div>
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity of items</span>
                            </label>
                            <input type="text" placeholder="e.g. 2 jackets, 3 blanket" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Item type</span>
                            </label>
                            <input type="text" placeholder="e.g. blanket, jacket, sweater" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Pickup location</span>
                            </label>
                            <input type="text" placeholder="e.g. House 12, Road 5, Dhanmondi, Dhaka" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Additional notes</span>
                            </label>
                            <input type="text" placeholder="optional" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-[#ff6f0f] text-white">Submit</button>
                        </div>
                    </form>
                    
                </div>
            </div>
            <ToastContainer position='top-center' />
        </div>
    );
};

export default DonationCampDetails;
