import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
    return (
        <div className="bg-base-100 shadow-sm">
            <div className="container mx-auto navbar">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-2xl font-bold">Keen<span className="text-[#244D3F]">Keeper</span></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href=""><AiOutlineHome></AiOutlineHome> Home</Link></li>
                    <li><Link href=""><CiClock2></CiClock2> Timeline</Link></li>
                    <li><Link href=""><ImStatsDots></ImStatsDots> Stats</Link></li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Navbar;