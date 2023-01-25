import React from "react"
import {BiMenu} from "react-icons/bi"
import { GrFormClose } from "react-icons/gr"
import { Link } from "react-scroll"

export default function Menu(){

    const[menuOpen,setMenuOpen]=React.useState(false)

    function toggleMenuOpen(){
        setMenuOpen(!menuOpen)
    }

    return(
        <nav>
            <div className="flex mb-8">
                
                <div className={menuOpen ?  "flex flex-col fixed w-fit z-30 p-2 left-0 top-0" : "flex flex-col relative w-fit z-30 p-2"}>
                    {menuOpen ? <GrFormClose size="2.5rem" onClick={toggleMenuOpen} /> :<BiMenu size="2.5rem" onClick={toggleMenuOpen}/>}
                    <h2 className={menuOpen ? "hidden" : "self-center text-sm"}>Menu</h2>
                </div>
                <h1 className="self-center text-center grow text-2xl text-red-700 font-bold mr-8">Super Kitchen</h1>
            </div>
            
            <div className={menuOpen ? "w-full fixed left-0 top-0 z-20" : "hidden"}>
                <ul className="flex flex-col h-screen justify-around bg-orange-50 ">
                    <li className="pl-10 font-semibold mt-16 hover:cursor-pointer">
                        <Link to="Appetisers" smooth={true} duration={500}>Appetisers</Link>
                    </li>
                    <li className="pl-10 font-semibold hover:cursor-pointer">
                        <Link to="Soups" smooth={true} duration={500} offset={30} onClick={toggleMenuOpen}>Soups</Link>
                    </li>
                    <li className="pl-10 font-semibold hover:cursor-pointer">
                        <Link to="Curry" smooth={true} duration={500} offset={30} onClick={toggleMenuOpen}>Curry</Link>
                    </li>
                    <li className="pl-10 font-semibold hover:cursor-pointer">
                        <Link to="Sweet & Sour HK Style" smooth={true} duration={500} offset={30} onClick={toggleMenuOpen}>Sweet & Sour HK Style</Link>
                    </li>
                    <li className="pl-10 font-semibold hover:cursor-pointer">
                        <Link to="Sweet & Sour Batter Style" smooth={true} duration={500} offset={30} onClick={toggleMenuOpen}>Sweet & Sour Batter Style</Link>
                    </li>
                    <li className="pl-10 font-semibold hover:cursor-pointer">
                        <Link to="Chow Mein" smooth={true} duration={500} offset={30} onClick={toggleMenuOpen}>Chow Mein</Link>
                    </li>
                    <li className="pl-10 font-semibold hover:cursor-pointer">
                        <Link to="Fried Rice" smooth={true} duration={500} offset={30} onClick={toggleMenuOpen}>Fried Rice</Link>
                    </li>
                    <li className="pl-10 font-semibold mb-4 hover:cursor-pointer">
                        <Link to="Sides" smooth={true} duration={500} offset={30} onClick={toggleMenuOpen}>Sides</Link>
                    </li>
                </ul>
            </div>
            
        </nav>
    )
}