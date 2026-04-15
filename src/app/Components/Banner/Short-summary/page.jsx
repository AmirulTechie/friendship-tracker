const ShortSummary = () => {
    return (
        <div className="flex gap-8 flex-wrap">
            <div className="w-[259.5px] flex flex-col items-center gap-1.5 px-6 py-7 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg">
                <span className="text-5xl font-bold text-gray-900 leading-none"> 10 </span>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Total Friends</span>
            </div>
            <div className="w-[259.5px] flex flex-col items-center gap-1.5 px-6 py-7 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg">
                <span className="text-5xl font-bold text-gray-900 leading-none"> 6 </span>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">On Track</span>
            </div>
            <div className="w-[259.5px] flex flex-col items-center gap-1.5 px-6 py-7 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg">
                <span className="text-5xl font-bold text-gray-900 leading-none"> 3 </span>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Need Attention</span>
            </div>
            <div className="w-[259.5px] flex flex-col items-center gap-1.5 px-6 py-7 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg">
                <span className="text-5xl font-bold text-gray-900 leading-none"> 12 </span>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Interactions This Month</span>
            </div>

        </div>
    );
};

export default ShortSummary;