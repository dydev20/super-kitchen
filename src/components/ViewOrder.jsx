import React from "react"
import { GrFormClose } from "react-icons/gr"

export default function ViewOrder(props){
    
    function renderOrderItems(){
        return(
            props.order.map((item, index) => {
                if(item.price!==0){

                    return (
                        <ul key={index} className="flex flex-col items-center">
                            <li><strong>{item.name}</strong></li>
                            <li>{item.styles}</li>
                            <ul>
                                {item.options.map(option=>{
                                    return(
                                        <li key={option} className="text-center">{option}</li>
                                    )
                                })}
                            </ul>
                            <li className="mb-2">£{item.price.toFixed(2)}</li>
                        </ul>
                    )
                }
                
            })
        )
    }

    return(
        <div>
            <div className="relative w-[90%] mx-auto my-4 py-8 bg-[#FFF6EA] rounded-xl shadow-2xl ">
                <GrFormClose className="absolute top-2 right-2" size="2rem" onClick={props.handleViewOrder}/>
                {renderOrderItems()}
                <p className="text-green-800 text-center mt-5"><strong>Total Price £{props.totalPrice.toFixed(2)}</strong></p>
                
            </div>
        </div>
    )
}