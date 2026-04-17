"use client";
import { IoCall, IoVideocamSharp } from "react-icons/io5";
import { LuMessageSquareText } from "react-icons/lu";
import { IoIosVideocam } from "react-icons/io";

const CheckInButtons = ({ friendId, name }) => {
    
    const saveInteraction = (type,) => {
        const existing = JSON.parse(localStorage.getItem("interactions") || "[]");
        const newEntry = {
            friendId,
            name,
            type,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        };
        localStorage.setItem("interactions", JSON.stringify([...existing, newEntry]));
        alert(`${type} interaction saved!`);
    };

    return (
        <div className="grid grid-cols-3 gap-3">
            <button onClick={() => saveInteraction("Text")} className="flex flex-col items-center justify-center border border-slate-200 rounded-xl py-4 gap-2 text-slate-600 hover:bg-slate-50">
                <span className="text-2xl"><LuMessageSquareText /></span>
                <span className="text-sm">TEXT</span>
            </button>
            <button onClick={() => saveInteraction("Call")} className="flex flex-col items-center justify-center border border-slate-200 rounded-xl py-4 gap-2 text-slate-600 hover:bg-slate-50">
                <span className="text-2xl"><IoCall /></span>
                <span className="text-sm">CALL</span>
            </button>
            <button onClick={() => saveInteraction("Video")} className="flex flex-col items-center justify-center border border-slate-200 rounded-xl py-4 gap-2 text-slate-600 hover:bg-slate-50">
                <span className="text-2xl"><IoVideocamSharp /></span>
                <span className="text-sm">VIDEO CALL</span>
            </button>
        </div>
    );
};

export default CheckInButtons;