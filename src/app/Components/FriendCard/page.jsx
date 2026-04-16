import Image from 'next/image';
import React from 'react';

const FriendCard = ({friend}) => {
    const { name, picture, email, days_since_contact, status, tags } = friend
    return (
        <div className="flex flex-col items-center justify-center p-6 bg-white py-6 font-sans hover:shadow-xl hover:cursor-pointer rounded-xl">
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
                <p> {days_since_contact}d ago </p>
            </span>
            <div className='flex gap-2'>
            {
                tags.map((tag, index) => <span key={index} className="px-2 py-1 mb-4 text-[10px] font-bold tracking-wide text-emerald-800 bg-emerald-100 rounded-full">
                    {tag.toUpperCase()}
                </span>)
            }
            </div>
            <span className={`px-4 py-1.5 text-[15px] font-medium text-white 
                ${status === "overdue" ? "bg-[#EF4444]" :
                    status === "almost due" ? "bg-[#EFAD44]" :
                    status === "on-track" ? "bg-[#244D3F]" :
                    ""
                } 
                rounded-full shadow-sm`}>
                {status.toUpperCase()}
            </span>
        </div>
    );
};

export default FriendCard;