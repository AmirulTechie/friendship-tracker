const ShortSummary = ({friends}) => {
    const countOnTrack = friends.filter(freind => freind.status === 'on-track').length;
    const counOverdue = friends.filter(friend => friend.status === "overdue").length;

    return (
        <div className="flex gap-8 flex-wrap justify-center items-center container mx-auto mb-15">
            <div className="w-65 flex flex-col items-center gap-1.5 px-6 py-7 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg">
                <span className="text-5xl font-bold text-gray-900 leading-none"> {friends.length} </span>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Total Friends</span>
            </div>
            <div className="w-65 flex flex-col items-center gap-1.5 px-6 py-7 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg">
                <span className="text-5xl font-bold text-gray-900 leading-none"> {countOnTrack} </span>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">On Track</span>
            </div>
            <div className="w-65 flex flex-col items-center gap-1.5 px-6 py-7 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg">
                <span className="text-5xl font-bold text-gray-900 leading-none"> {counOverdue} </span>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Need Attention</span>
            </div>
            <div className="w-65 flex flex-col items-center gap-1.5 px-6 py-7 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg">
                <span className="text-5xl font-bold text-gray-900 leading-none"> 12 </span>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Interactions This Month</span>
            </div>

        </div>
    );
};

export default ShortSummary;