import React from 'react';
import contact from '../assets/contact.png'
const ContactUs = () => {
    return (
        <div>
            <div className='mb-10'>
                <h2 className='text-center text-[35px] font-bold animate__animated animate__fadeInUp'>Contact With Us</h2>
            </div>
            <div className='max-w-screen-xl mx-auto md:flex md:justify-between grid grid-cols-1 animate__animated animate__fadeInUp'>
                <div className='grid grid-cols-1 md:w-1/2'>
                    <form className="card-body p-0 py-5 px-5  bg-white rounded-2xl">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="text" placeholder="Phone Number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input type="text" placeholder="Subject" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea className="textarea textarea-bordered w-full" placeholder="Message"></textarea>

                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-[#ff6f0f] text-white hover:text-black">Login</button>
                        </div>
                    </form>
                </div>
                <div className='px-5'>
                    <img className='rounded-2xl' src={contact} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;