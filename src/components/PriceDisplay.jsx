import React from "react"

export default function PriceDisplay(props){
    
    return(
        <div className="bg-green-800 text-white h-1/3 sticky bottom-0 left-0 p-2 flex justify-around items-center">
            <h1>Total Price: £{props.totalPrice.toFixed(2)}</h1>
            
            <button 
                className="bg-red-700 rounded-sm p-2"
                onClick={props.handleViewOrder}

            >View Order</button>
            
        </div>
    )
}