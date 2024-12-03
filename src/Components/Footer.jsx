import React from 'react';
import { FaAddressBook, FaFacebook, FaPhoneAlt } from 'react-icons/fa';
import { FaSquareInstagram, FaXTwitter } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#f2f2f2]'>
            <footer className=" max-w-screen-xl mx-auto px-5 lg:px-0 py-20">
                <div className='lg:flex lg:justify-between text-base-content footer'>
                    <div className='space-y-2 bg-[#ff6f0f] p-8 rounded-xl text-white'>
                        <p className='flex justify-center items-center text-[18px] gap-2' ><MdEmail /> info@winterdonation.com</p>
                        <p className='flex justify-center items-center text-[18px] gap-2'><FaPhoneAlt /> 01724789546</p>
                        <p className='flex justify-center text-[18px] gap-2'><FaAddressBook /> Mirpur 2, Rupnagar Abashik <br /> Road-22, House-37 <br />Dhaka, Bangladesh</p>
                    </div>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">Home</a>
                        <a className="link link-hover">Donation Campaigns</a>
                        <a className="link link-hover">How to Help</a>
                        <a className="link link-hover">Login</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <div>
                        <h6 className="footer-title">Newsletter</h6>
                        <div className='flex gap-5 text-[25px] text-[#ff6f0f]'>
                            <NavLink to='https://www.facebook.com/'><FaFacebook /></NavLink>
                            <NavLink to='https://www.instagram.com/'><FaSquareInstagram /></NavLink>
                            <NavLink to='https://x.com/'><FaXTwitter /></NavLink>
                            <NavLink to='https://www.youtube.com/'><IoLogoYoutube /></NavLink>
                        </div>
                        <form>
                            <fieldset className="form-control w-80">
                                <label className="label">
                                    <span className="label-text">Enter your email address</span>
                                </label>
                                <div className="join">
                                    <input
                                        type="text"
                                        placeholder="username@site.com"
                                        className="input input-bordered join-item" />
                                    <button className="btn bg-[#ff6f0f] text-white join-item">Subscribe</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='border border-black'></div>
                    <p className='mt-10 text-center'>Winter Donation © All right reserve 2024</p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;