import React from "react"

export default function FoodGroup(props){
    const [addItem,setAddItem]=React.useState({
        styles:"",
        options:[],
        with:""
    })

    function handleChange(e){
        const {name,value,type,checked}=e.target
        setAddItem(prevAddItem=>{
            return{
                ...prevAddItem,
                [name]:type==="checkbox" ? checked :value
            }
        })
        
    }

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
    /* checks if the value of options is of type string*/
    /* if type string then render a single checkbox, if options is an array then map to render a checkbox for each element in array */
    function renderFoodItemOptions(foodItem){
        
        
        
        if(typeOfValueIsString(foodItem.options)===true){
            return (
                <li className="mb-2">
                    <div>
                        <label htmlFor="option">{foodItem.options}</label>
                        <input 
                            type="checkbox" 
                            id="option"
                            name="options"
                            value={addItem.options}
                            onChange={handleChange}
                        />
                    </div>
                </li>
            )
        }else{
            return (

                
                foodItem.options.map(option=>{
                
                    return(
                        
                        <li key={option}>
                            <div >
                                <label htmlFor="options">{option}</label>
                                <input 
                                    type="checkbox"
                                    id="options"
                                    name="options"
                                    value={addItem.options}
                                    onChange={handleChange}

                                />
                            </div>
                        </li>
                    )
                        
                })
                
            )
        
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
                                            <label htmlFor="styles" className="mb-1">Styles</label>
                                            <select 
                                                name="styles" 
                                                id="styles" 
                                                className="p-2 border-2 border-slate-400 rounded-sm"
                                                value={addItem.styles}
                                                onChange={handleChange}
                                                
                                            >
                                                <option value="">--Choose style--</option>
                                                

                                                {foodItem.styles.map(style => {
                                                    return (<option value={style} key={style}>{style}</option>)
                                                })}
                                            </select>
                                        </div>
                                    </li>
                                }

                                {/* options */}
                                {/* if food item has property "options then render options" */}
                                {objectHasProperty(foodItem,"options") &&    
                                    <div className="flex flex-col gap-2 my-4 sm:flex-row justify-center">{renderFoodItemOptions(foodItem)}</div>
                                }

                                {/* with */}
                                {/* if food item has property "with" then map */}
                                {objectHasProperty(foodItem, "with") &&
                                    <li className="mb-2">
                                        <div className="flex flex-col w-2/4 mx-auto">
                                            <label htmlFor="with" className="mb-1">With</label>
                                            <select 
                                                name="with" 
                                                id="with" 
                                                className="p-2 border-2 border-slate-400 rounded-sm"
                                                value={addItem.with}
                                                onChange={handleChange}
                                            >
                                                
                                                <option value="">--with--</option>

                                                {foodItem.with.map(item => {
                                                    return (<option value={item} key={item}>{item}</option>)
                                                })}
                                            </select>
                                        </div>
                                    </li>
                                }
                                
                                {/* price */}
                                <li className="mb-2">£{foodItem.price.toFixed(2)}</li>

                                <button 
                                    className="bg-green-800 text-white p-2 rounded-sm" 
                                    onClick={()=>props.addToOrder(addItem,foodItem.name,foodItem.price)}
                                >Add to Order</button>
                                

                            </ul>
                        )
                    }
                        
                    )
                }
                
            </div>
            
        </div>
    )
}