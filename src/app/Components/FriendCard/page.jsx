import Image from 'next/image';
import React from 'react';

const FriendCard = ({friend}) => {
    const { name, picture, email, days_since_contact, status, tags } = friend
    return (
        <div className="flex flex-col items-center justify-center w-65 bg-white py-6 font-sans">
            <Image
                src={picture}
                alt="Profile"
                width={84}
                height={84}
                className="rounded-full mb-4"
            />

            <h2 className="text-[22px] font-bold text-slate-800 mb-1">
                {name}
            </h2>

            <span className="text-[15px] text-slate-500 mb-5">
                {days_since_contact}d ago
            </span>

            <span className="px-3 py-1 mb-4 text-xs font-semibold tracking-wide text-emerald-800 bg-emerald-100 rounded-full">
                {tags[0]}
            </span>

            <span className="px-4 py-1.5 text-[15px] font-medium text-white bg-[#EBA74C] rounded-full shadow-sm">
                {status}
            </span>
        </div>
    );
};

export default FriendCard;