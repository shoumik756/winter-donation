import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DonationCard from './DonationCard';

const DonationCampaigns = () => {

    const donationCamps = useLoaderData()
    return (
        
        <div className='max-w-screen-xl mx-auto my-20 px-5 lg:px-0'>
            <div className='mb-10'>
                <h2 className='text-center text-[35px] font-bold animate__animated animate__fadeInUp'>All Running Campaigns Here</h2>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate__animated animate__fadeInUp'>
                {
                    donationCamps.map(donationCamp=> <DonationCard donationCamp={donationCamp}></DonationCard>)
                }
           </div>
        </div>
    );
};

export default DonationCampaigns;