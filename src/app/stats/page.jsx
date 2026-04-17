"use client";

import EmptyListImg from "../../../public/emptyList.webp"
import Image from "next/image";

const StatsPage = () => {
    
    return (
        <div className="min-h-screen pt-20 pb-10 mt-20">
            <div className="container mx-auto max-w-3xl px-4">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-slate-800">Stats</h1>

                </div>
                    <div className="bg-white text-center rounded-2xl flex flex-col justify-center items-center">
                        <Image src={EmptyListImg} alt="empty"></Image>
                        <p className="text-3xl font-bold mb-20">No Interactions Yet</p>
                    </div>
            </div>
        </div>
    );
};

export default StatsPage;