import { GoPlus } from "react-icons/go";

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen mt-0.5">
            <div className="hero-content text-center container mx-auto">
                <div className="">
                    <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
                    <p className="py-6 max-w-lg mx-auto">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the
                        relationships that matter most.
                    </p>
                    <button className="btn bg-[#244D3F] text-white"><GoPlus></GoPlus> Add a Friend</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;