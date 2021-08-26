import React from 'react'
import {HomeIcon,SearchIcon,PlusIcon,StarIcon} from "@heroicons/react/solid";
import Image from "next/image";

function Header() {
    return (
        <div className="sticky bg-[#040714] top-0 z-[1000] flex items-center px-10 h-[72px] md:px-12 ">
            <Image src="/images/logo.svg" width={80} height={80} className="cursor-pointer"  />
            <div className="hidden ml-10 md:flex items-center space-x-6">
                <a className="header-link group">
                    <HomeIcon className="h-4"  />
                    <span className="span">Home</span>
                </a>
                <a className="header-link group">
                    <SearchIcon className="h-4"  />
                    <span className="span">search</span>
                </a>
                <a className="header-link group">
                    <PlusIcon className="h-4"  />
                    <span className="span">watchlist</span>
                </a>
                <a className="header-link group">
                    <StarIcon className="h-4"  />
                    <span className="span">originals</span>
                </a>
                <a className="header-link group">
                    <img src="/images/movie-icon.svg" alt="" className="h-5"  />
                    <span className="span">Movies</span>
                </a>
                <a className="header-link group">
                    <img src="/images/series-icon.svg" className="h-5"  />
                    <span className="span">series</span>
                </a>
            </div>
            <button className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200">Login</button>
        </div>
    )
}

export default Header
 
