import React from "react"

export default function FoodGroup(props){

    /* not all food items in a food group has the same properties */
    /* function to check if a food item in a particular item group has a property */
    function objectHasProperty(object, property) {
        if (Object.hasOwn(object, property)) {
            return true
        }
    }

    /* in a item group, type of value for a property can be different between items */
    /* function to check type of value for property so if it's not a string, array map can be used*/
    function typeOfValueIsString(property) {
        if (typeof property === "string") {
            return true
        } else {
            return false
        }
    }

    /* function that renders the food item options */
    /* checks if the food item has the options property and then checks if the value of options is of type string*/
    /* if type string then render a single checkbox, if options is an array then map to render a checkbox for each element in array */
    function renderFoodItemOptions(foodItem){
        
        
        if (objectHasProperty(foodItem, "options")===true){
            if(typeOfValueIsString(foodItem.options)===true){
                return (
                    <li className="mb-2">
                        <div>
                            <label htmlFor="">{foodItem.options}</label>
                            <input type="checkbox" />
                        </div>
                    </li>
                )
            }else{
                return (

                    
                    foodItem.options.map(option=>{
                    
                        return(
                            
                            <li key={option}>
                                <div >
                                    <label htmlFor="">{option}</label>
                                    <input type="checkbox"/>
                                </div>
                            </li>
                        )
                            
                    })
                    
                )
            }
        }
    }

    return(
        <div>
            {/* food group name */}
            <h2 className="font-bold text-center">{props.name}</h2> 

            <div className="border-2 border-slate-500 rounded-t text-center w-11/12 mx-auto mb-8 mt-4">
                

                {
                    props.foodGroup.map(foodItem=>{
                        return(
                            <ul key={foodItem.id} className="border-b-2 border-slate-400 last:border-none py-4">
                                <li className="mb-2">

                                
                                    <div className="flex justify-center gap-1">
                                        <p className="font-semibold">{foodItem.name}</p>

                                        {/* if food item has property "quantity" then render quantity value */}
                                        {objectHasProperty(foodItem, "quantity") && <p className="text-sm self-center">({foodItem.quantity})</p>}

                                    </div>
                                </li>
                                
                                {/* styles */}
                                {/* if food item has property "styles" then map */}
                                {objectHasProperty(foodItem, "styles") &&
                                    <li className="mb-2">
                                        <div className="flex flex-col w-2/4 mx-auto">
                                            <label htmlFor="" className="mb-1">Styles</label>
                                            <select name="" id="" className="p-2 border-2 border-slate-400 rounded-sm">
                                                

                                                {foodItem.styles.map(style => {
                                                    return (<option value="" key={style}>{style}</option>)
                                                })}
                                            </select>
                                        </div>
                                    </li>
                                }

                                {/* options */}
                                {
                                    <div className="flex flex-col gap-2 my-4 sm:flex-row justify-center">{renderFoodItemOptions(foodItem)}</div>
                                }

                                {/* with */}
                                {/* if food item has property "with" then map */}
                                {objectHasProperty(foodItem, "with") &&
                                    <li className="mb-2">
                                        <div className="flex flex-col w-2/4 mx-auto">
                                            <label htmlFor="" className="mb-1">With</label>
                                            <select name="" id="" className="p-2 border-2 border-slate-400 rounded-sm">
                                                

                                                {foodItem.with.map(item => {
                                                    return (<option value="" key={item}>{item}</option>)
                                                })}
                                            </select>
                                        </div>
                                    </li>
                                }
                                
                                {/* price */}
                                <li className="mb-2">£{foodItem.price}</li>

                                <button className="bg-green-800 text-white p-2 rounded-sm">Add to Order</button>
                                

                            </ul>
                        )
                    }
                        
                    )
                }
                
            </div>
            
        </div>
    )
}