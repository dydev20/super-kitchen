import React from "react"
import {BiMenu} from "react-icons/bi"
import { GrFormClose } from "react-icons/gr"

export default function Menu(){

    const[menuOpen,setMenuOpen]=React.useState(false)

    function toggleMenuOpen(){
        setMenuOpen(!menuOpen)
    }

    return(
        <nav>
            <div className={menuOpen ?  "flex flex-col fixed w-fit z-20 p-2 left-0 top-0" : "flex flex-col relative w-fit z-20 p-2"}>
                {menuOpen ? <GrFormClose size="3rem" onClick={toggleMenuOpen} /> :<BiMenu size="3rem" onClick={toggleMenuOpen}/>}
                <h2 className={menuOpen ? "hidden" : "self-center"}>Menu</h2>
                
            </div>
            
            <div className={menuOpen ? "w-full fixed left-0 top-0" : "hidden"}>
                <ul className="flex flex-col h-screen justify-around bg-orange-50 ">
                    <li className="pl-10 font-semibold mt-16">Appetisers</li>
                    <li className="pl-10 font-semibold">Soups</li>
                    <li className="pl-10 font-semibold">Curry</li>
                    <li className="pl-10 font-semibold">Sweet & Sour HK Style</li>
                    <li className="pl-10 font-semibold">Sweet & Sour Batter Style</li>
                    <li className="pl-10 font-semibold">Chow Mein</li>
                    <li className="pl-10 font-semibold">Fried Rice</li>
                    <li className="pl-10 font-semibold mb-4">Sides</li>
                </ul>
            </div>
            
        </nav>
    )
}