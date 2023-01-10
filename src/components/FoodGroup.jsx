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
                    <div>
                        <label htmlFor="">{foodItem.options}</label>
                        <input type="checkbox" />
                    </div>
                    
                )
            }else{
                return (
                    foodItem.options.map(option=>{
                        
                        return(
                            <div key={option}>
                                <label htmlFor="">{option}</label>
                                <input type="checkbox" />
                            </div>
                            
                        )
                    }))
            }
        }
    }

    return(
        <div>
            <div>
                {/* food group name */}
                <h2>{props.name}</h2>

                {
                    props.foodGroup.map(foodItem=>{
                        return(
                            <div key={foodItem.id}>
                                <div>
                                    <p>{foodItem.name}</p>
                                    {/* if food item has property "quantity" then render quantity value */}
                                    {objectHasProperty(foodItem, "quantity") && <p>({foodItem.quantity})</p>}

                                </div>

                                {/* price */}
                                <p>£{foodItem.price}</p>

                                {/* styles */}
                                {/* if food item has property "styles" then map */}
                                {objectHasProperty(foodItem, "styles") &&

                                    <div>
                                        <select name="" id="">
                                            

                                            {foodItem.styles.map(style => {
                                                return (<option value="" key={style}>{style}</option>)
                                            })}
                                        </select>
                                    </div>
                                }

                                {/* options */}
                                {
                                    renderFoodItemOptions(foodItem)
                                }

                                {/* with */}
                                {/* if food item has property "with" then map */}
                                {objectHasProperty(foodItem, "with") &&

                                    <div>
                                        <select name="" id="">
                                            

                                            {foodItem.with.map(item => {
                                                return (<option value="" key={item}>{item}</option>)
                                            })}
                                        </select>
                                    </div>
                                }
                                
                                

                                
                            </div>
                        )
                    }
                        
                    )
                }
                
            </div>
            
        </div>
    )
}