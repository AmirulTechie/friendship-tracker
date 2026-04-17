"use client";
import { useState } from "react";
import { IoCall, IoVideocam } from "react-icons/io5";
import { LuMessageSquareText } from "react-icons/lu";

const TimelinePage = () => {
    const [interactions, setInteractions] = useState(() => {
        if (typeof window === "undefined") return [];
        const data = JSON.parse(localStorage.getItem("interactions") || "[]");
        return [...data].reverse();
    });

    const clearHistory = () => {
        localStorage.removeItem("interactions");
        setInteractions([]);
    };

    return (
        <div className="min-h-screen pt-20 pb-10 mt-20">
            <div className="container mx-auto max-w-3xl px-4">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-slate-800">Timeline</h1>
                    {interactions.length === 0 ? "" :  
                        <button onClick={clearHistory} className="text-xs border border-red-200 px-3 py-1 rounded-lg text-red-500 hover:bg-red-50 hover:cursor-pointer">
                            Clear History
                        </button>
                    }
                    
                </div>
                {interactions.length === 0 ? (
                    <div className="bg-white text-center rounded-2xl">
                        <p className="">No Interactions Yet</p>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4">
                        {interactions.map((item, i) => (
                            <div key={i} className="bg-white rounded-2xl p-5 shadow-sm flex items-center gap-4">
                                <span className="text-2xl text-emerald-700">
                                    {item.type === "Call" && <IoCall />}
                                    {item.type === "Text" && <LuMessageSquareText />}
                                    {item.type === "Video" && <IoVideocam />}
                                </span>
                                <div>
                                    <p className="font-semibold text-slate-800">
                                        <span className="font-bold text-xl">{item.type}</span> with {item.name}
                                    </p>
                                    <p className="text-sm text-slate-400">{item.date} • {item.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TimelinePage;