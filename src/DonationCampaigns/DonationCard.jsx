import React from 'react';
import { NavLink } from 'react-router-dom';

const DonationCard = ({ donationCamp }) => {
    const { image, title, description, division,id} = donationCamp
    return (
        <div className="card bg-base-100 ]">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt={title}
                    className="rounded-2xl h-[200px] w-full" />
            </figure>
            <div className="card-body space-y-2">
                <h2 className="text-[25px] font-semibold">{title}</h2>
                <p>{description}</p>
                <p className="text-[20px] font-semibold">{division}</p>
                <NavLink to={`/donationcampainsdetails/${id}`}>
                    <div className="card-actions">
                        <button className="btn bg-[#ff6f0f] w-full text-white">Donate Now</button>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default DonationCard;