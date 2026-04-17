"use client";
import { useState } from "react";
import { Pie, PieChart, Tooltip, Legend } from 'recharts';
import EmptyListImg from "../../../public/emptyList.webp"
import Image from "next/image";

const StatsPage = () => {
    const [interactions] = useState(() => {
        if (typeof window === "undefined") return [];
        return JSON.parse(localStorage.getItem("interactions") || "[]");
    });

    const calls = interactions.filter(i => i.type === "Called").length;
    const texts = interactions.filter(i => i.type === "Texted").length;
    const videos = interactions.filter(i => i.type === "Video Called").length;

    const data = [
        { name: "Calls", value: calls, fill: "#244d3f" },
        { name: "Texts", value: texts, fill: "#7f37f5" },
        { name: "Videos", value: videos, fill: "#37a163" },
    ].filter(d => d.value > 0);

    return (
        <div className="min-h-screen pt-20 pb-10 mt-0 md:mt-20">
            <div className="container mx-auto max-w-3xl px-4">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-slate-800">Stats</h1>
                </div>

                {data.length === 0 ? (
                    <div className="bg-white rounded-2xl flex flex-col justify-center items-center py-16">
                        <Image src={EmptyListImg} alt="empty" />
                        <p className="text-3xl font-bold mt-3 mb-20">No Interactions Yet</p>
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <div className="text-left text-xl font-bold">
                                <p className="text-[#244D3F]">By Interaction type</p>
                        </div>
                            <div className="flex justify-center">
                        <PieChart style={{ width: "100%", maxWidth: "500px", maxHeight: "80vh", aspectRatio: 1 }} responsive>
                            <Pie
                                data={data}
                                innerRadius="60%"
                                outerRadius="80%"
                                cornerRadius="50%"
                                paddingAngle={5}
                                dataKey="value"
                            />
                            <Tooltip />
                            <Legend />
                        </PieChart>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StatsPage;