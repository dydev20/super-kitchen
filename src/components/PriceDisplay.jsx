import React from "react"

export default function PriceDisplay(props){
    return(
        <div className="bg-green-800 text-white h-1/3 sticky bottom-0 left-0">
            <h1>Total Price: £{props.orderPrice.toFixed(2)}</h1>
            
        </div>
    )
}