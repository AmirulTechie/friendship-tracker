
import CheckInButtons from "@/app/Components/CheckInBtns/page";
import friends from "@/app/data/friends.json";
import Image from "next/image";
import { BsBellSlashFill } from "react-icons/bs";
import { IoArchive} from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

const FriendDetailPage = async ({ params }) => {
    const { friendId } = await params;
    const friend = friends.find(f => f.id === Number(friendId));
    const { name, days_since_contact, status, tags, picture, bio, goal, next_due_date, email } = friend;

    return (
        <div className="min-h-screen pt-20 pb-10 mt-20">
            <div className="container mx-auto max-w-8xl px-4 flex flex-col md:flex-row gap-6">

                <div className="bg-white rounded-2xl p-6 flex flex-col items-center gap-3 w-full md:w-72 shadow-sm">
                    <Image
                        src={picture}
                        alt={name}
                        width={90}
                        height={90}
                        className="rounded-full"
                    />
                    <h2 className="text-xl font-bold text-slate-800">{name}</h2>

                    <div className="flex flex-col gap-3 justify-center">
                        <div className="flex gap-1">
                        {tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1 text-xs font-bold text-emerald-800 bg-emerald-100 rounded-full">
                                {tag.toUpperCase()}
                            </span>
                        ))}
                        </div>
                        <span className={`px-3 py-1 text-xs font-semibold text-white rounded-full
                            ${status === "overdue" ? "bg-red-500" :
                                status === "almost due" ? "bg-yellow-500" :
                                    "bg-emerald-800"} text-center`}>
                            {status.toUpperCase()}
                        </span>
                    </div>

                    <p className="text-sm text-slate-500 italic text-center">{bio}</p>
                    <p className="text-sm text-slate-400">Email: {email}</p>

                    <div className="w-full flex flex-col gap-2 mt-2">
                        <button className="w-full flex items-center gap-2 justify-center border border-slate-200 rounded-xl py-2 text-sm text-slate-600 hover:bg-slate-50">
                            <BsBellSlashFill /> Snooze 2 Weeks
                        </button>
                        <button className="w-full flex items-center gap-2 justify-center border border-slate-200 rounded-xl py-2 text-sm text-slate-600 hover:bg-slate-50">
                            <IoArchive />Archive
                        </button>
                        <button className="w-full flex items-center gap-2 justify-center border border-slate-200 rounded-xl py-2 text-sm text-red-500 hover:bg-red-50">
                            <RiDeleteBin6Line />Delete
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-4 flex-1">

                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
                            <p className="text-3xl font-bold text-slate-800">{days_since_contact}</p>
                            <p className="text-sm text-slate-400 mt-1">Days Since Contact</p>
                        </div>
                        <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
                            <p className="text-3xl font-bold text-slate-800">{goal}</p>
                            <p className="text-sm text-slate-400 mt-1">Goal (Days)</p>
                        </div>
                        <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
                            <p className="text-xl md:text-3xl font-bold text-slate-800">{next_due_date}</p>
                            <p className="text-sm text-slate-400 mt-1">Next Due</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-5 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="font-semibold text-slate-700">Relationship Goal</h3>
                            <button className="text-xs border border-slate-200 px-3 py-1 rounded-lg text-slate-500 hover:bg-slate-50">Edit</button>
                        </div>
                        <p className="text-sm text-slate-500">Connect every <strong>{goal}</strong></p>
                    </div>

                    <div className="bg-white rounded-2xl p-5 shadow-sm">
                        <h3 className="font-semibold text-slate-700 mb-4">Quick Check-In</h3>
                        <CheckInButtons friendId={friendId} name={name}></CheckInButtons>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FriendDetailPage;