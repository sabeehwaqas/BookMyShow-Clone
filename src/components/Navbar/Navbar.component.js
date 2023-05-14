import React from "react";
import { BiChevronRight, BiSearch,BiChevronDown,BiMenu } from "react-icons/bi"
import {FaChevronDown} from "react-icons/fa"

const NavSm = () => {
    return(
    <div className="text-white flex items-center justify-between">
        <div>
            <h3 className="text-xl font-bold">It All Starts Here!</h3>
            <span className="text-grey-400 text-xs flex items-center">
               Islamabad <BiChevronRight />
            </span>
        </div>
        <div className="flex items-center gap-8">
        <div>
            <button className="text-xs px-3 py-2 rounded-lg ml-10 bg-butcolor-300 ">Use App</button>
        </div>
        <div className="w-6 h-6">
            <BiSearch className="w-full h-full"/>
        </div>
        </div>
    </div>
    )
}; /*Mobile screen*/
const NavMd = () => {
    return(
                    
    <div className="mx-3 my-3 px-3 py-2 w-full flex items-center bg-white gap-3 rounded">
        <BiSearch />
        <input type="search" className="w-full focus:outline-none " placeholder="Search for Movies, Event, Sports and Activities "/>
    </div>
 
    )
}; /*Tab screen*/
const NavLg = () => {
    return(
    <div className="container mx-auto py-2 px-4 flex items-center justify-between" >
        <div className="flex item-center w-3/4 items-center">
            <div className="w-32 h-14 pr-2">
                <img src="https://seeklogo.com/images/B/bookmyshow-logo-31BC3C7354-seeklogo.com.png" alt="logo" className="w-full h-full"/>
                <svg className="w-full h-full">
                    <logo />
                </svg>
            </div>
        <div className="w-full flex items-center bg-white gap-3 px-6 py-2 rounded-md">
        <BiSearch />
        <input type="search" className="w-full focus:outline-none " placeholder="Search for Movies, Event, Sports and Activities "/>
    </div>
        </div>
        <div className="flex items-center gap-6">
            <div className="flex gap-1 items-center text-gray-400 text-sm flex items-center hover:text-white hover:cursor-pointer   ">
                <span className="text-gray-400 text-sm flex items-center hover:text-white hover:cursor-pointer  ">
                    Islamabad 
                 </span>
                <div>
                    <FaChevronDown />
                </div>
            </div>

            <button className="bg-red-600 text-white text-sm rounded px-2 py-1">
                Sign in
            </button>

            <div className="w-8 h-8 text-white">
                <BiMenu className="w-full h-full" />
            </div>
        </div>
    </div>
    )
}; /*Computer screen*/

const Navbar= () => {
return (
    <>
    <nav className="bg-navcolor-700 px-4 py-2">
        
        <div className="md:hidden">
        <NavSm />
        </div>
        <div className="hidden lg:hidden md:flex">
        <NavMd />
        </div>
        <div className="hidden lg:flex">
        <NavLg />
        </div>
    </nav>

    </>
)
}

export default Navbar;