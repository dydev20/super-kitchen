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
            <div className="flex flex-col relative w-fit z-20 p-2">
                {menuOpen ? <GrFormClose size="3rem" onClick={toggleMenuOpen} /> :<BiMenu size="3rem" onClick={toggleMenuOpen}/>}
                <h2 className="self-center">Menu</h2>
                
            </div>
            
            <div className={menuOpen ? "w-[70%] h-screen absolute left-0 top-0" : "hidden"}>
                <ul className="flex flex-col bg-orange-50 ">
                    <li className="self-center mb-10 font-semibold mt-36">Appetisers</li>
                    <li className="self-center mb-10 font-semibold">Soups</li>
                    <li className="self-center mb-10 font-semibold">Curry</li>
                    <li className="self-center mb-10 font-semibold">Sweet & Sour</li>
                    <li className="self-center mb-10 font-semibold">Chow Mein</li>
                    <li className="self-center mb-10 font-semibold">Fried Rice</li>
                    <li className="self-center mb-10 font-semibold">Sides</li>
                </ul>
            </div>
            
        </nav>
    )
}