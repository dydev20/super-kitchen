import React from "react"
import FoodItem from "./FoodItem"

export default function FoodGroup(props){
    
    return(
        <div name={props.name}>
            {/* food group name */}
            <h2 className="font-bold text-center">{props.name}</h2> 

            <div className="border-2 border-slate-500 rounded-t text-center w-11/12 mx-auto mb-8 mt-4">
                

                {
                    props.foodGroup.map(foodItem=>{
                        return(
                            <FoodItem 
                                key={foodItem.id}
                                foodItem={foodItem}
                                addToOrder={props.addToOrder}
                                handleAddItem={props.handleAddItem}
                            />
                        )
                    }
                        
                    )
                }
                
            </div>
            
        </div>
    )
}