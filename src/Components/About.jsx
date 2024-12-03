import React from 'react';

const About = () => {
    return (
        <div className='my-20'> 
            <div className='mb-10'>
                <h2 className='text-center text-[35px] font-bold animate__animated animate__fadeInUp'>About Us</h2>
            </div>
            <div className='lg:flex lg:items-center lg:justify-between grid'>
                <div className='lg:w-1/2 animate__animated animate__fadeInUp p-5 lg:p-0'>
                    <p>
                        This website is mainly for donating winter cloths to the helpless people. In our country there are many people suffering in winter for cold. Because many of them can not afford the winter cloths. So they are sufferd so much in winter season. But our website can helps those helpless people who could not afford winter colths. In Our website people can donate their winter cloths via our website, and we give the cloths to those helpless people so that they can wear winter cloths in winter. So users can login to our website and they can see the donation Campaigns and they can donate what they want. So this is the main mession of our website. 
                    </p>
                </div>
                <div className=' animate__animated animate__fadeInUp'>
                    <img className='lg:w-[500px]' src="https://i.ibb.co.com/KqqTyq3/illustration-people-wearing-winter-clothes.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;