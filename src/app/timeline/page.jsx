"use client";
import { useState } from "react";
import { IoCall, IoVideocam } from "react-icons/io5";
import { LuMessageSquareText } from "react-icons/lu";
import EmptyListImg from "../../../public/emptyList.webp"
import Image from "next/image";

const TimelinePage = () => {
    const [filter, setFilter] = useState("All");
    const [sortOrder, setSortOrder] = useState("Newest");

    const [interactions, setInteractions] = useState(() => {
        if (typeof window === "undefined") return [];
        const data = JSON.parse(localStorage.getItem("interactions") || "[]");
        return [...data].reverse();
    });

    const filtered = filter === "All" ? interactions : interactions.filter(i => i.type === filter);
    const sorted = sortOrder === "Newest" ? filtered : [...filtered].reverse();

    const clearHistory = () => {
        localStorage.removeItem("interactions");
        setInteractions([]);
    };

    return (
        <div className="min-h-screen pt-20 pb-10 mt-2">
            <div className="container mx-auto max-w-3xl px-4">

                <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold text-slate-800">Timeline</h1>
                    {interactions.length === 0 ? "" :
                        <button onClick={clearHistory} className="text-xs border border-red-200 px-3 py-1 rounded-lg text-red-500 hover:bg-red-50 hover:cursor-pointer">
                            Clear Timeline
                        </button>
                        }
                </div>
                <div className="flex gap-2 mb-10">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1">Type: {filter}</div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={() => setFilter("All")}>All</a></li>
                            <li><a onClick={() => setFilter("Texted")}>Texts</a></li>
                            <li><a onClick={() => setFilter("Called")}>Calls</a></li>
                            <li><a onClick={() => setFilter("Video Called")}>Video Calls</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1">Order: {sortOrder}</div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={() => setSortOrder("Newest")}>Newest</a></li>
                            <li><a onClick={() => setSortOrder("Oldest")}>Oldest</a></li>
                        </ul>
                    </div>
                </div>

                {interactions.length === 0 ? (
                    <div className="bg-white text-center rounded-2xl flex flex-col justify-center items-center">
                        <Image src={EmptyListImg} alt="empty" />
                        <p className="text-3xl font-bold mb-20">No Interactions Yet</p>
                    </div>
                ) : sorted.length === 0 ? (
                    <p className="text-slate-400">No {filter} interactions found.</p>
                ) : (
                    <div className="flex flex-col gap-4">
                        {sorted.map((item, i) => (
                            <div key={i} className="bg-white rounded-2xl p-5 shadow-sm flex items-center gap-4">
                                <span className="text-3xl text-emerald-700">
                                    {item.type === "Called" && <IoCall />}
                                    {item.type === "Texted" && <LuMessageSquareText />}
                                    {item.type === "Video Called" && <IoVideocam />}
                                </span>
                                <div>
                                    <p className="font-semibold text-slate-800">
                                        <span className="font-bold text-xl">{item.type} {item.name}</span>
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