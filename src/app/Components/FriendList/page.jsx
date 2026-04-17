"use client";

import { useEffect, useState } from "react";
import FriendCard from "../FriendCard/page";

const FriendList = ({ friends }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-75">
                <p className="text-5xl text-red-500">Loading.....</p>
            </div>
        );
    }

    return (
        <div className="bg-base-200 min-h-screen p-5 mb-20">
            <div className="container mx-auto">
                <div>
                    <h2 className="text-left font-bold text-2xl">
                        Your Friends
                    </h2>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10 mt-10">
                    {friends.map((friend, index) => (
                        <FriendCard key={index} friend={friend} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FriendList;