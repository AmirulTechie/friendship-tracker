import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
    return (
        <div className="navbar fixed top-0 left-0 right-0 z-100 bg-base-100 shadow-sm justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link href=""><AiOutlineHome></AiOutlineHome> Home</Link></li>
                        <li><Link href=""><CiClock2></CiClock2> Timeline</Link></li>
                        <li><Link href=""><ImStatsDots></ImStatsDots> Stats</Link></li>
                    </ul>
                </div>
                <Link href="/" className="text-2xl font-bold">Keen<span className="text-[#244D3F]">Keeper</span></Link>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/"><AiOutlineHome></AiOutlineHome> Home</Link></li>
                    <li><Link href="/timeline"><CiClock2></CiClock2> Timeline</Link></li>
                    <li><Link href="/stats"><ImStatsDots></ImStatsDots> Stats</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

