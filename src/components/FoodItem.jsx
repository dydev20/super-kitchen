import React from "react"

export default function FoodItem(props){

    const styleRef=React.useRef("")
    const withRef=React.useRef("")

    const [options, setOptions] = React.useState([])

    //join the food item name string with a "-" and change to lower case to be used for labels and input/select ids
    const foodItemNameForId = props.foodItem.name.toLowerCase().split(" ").join("-")

    /* function that sets itemExtras to the value of the selected dropdown/checked checkbox */
    function handleChange(e) {
        
        const { value, checked } = e.target

        if (checked) { /* add checked food item optionals to options array */
            setOptions(prevOptions => {
                return [...prevOptions, value]
                
            })
        } else { /* remove unchecked food item optionals from options array  */
            setOptions(prevOptions => {
                return [...prevOptions.filter(extra => extra !== value)]
                
            })
        }
        
    }

    /* not all food items in a food group has the same properties */
    /* function to check if a food item in a particular item group has a property */
    function objectHasProperty(object, property) {
        if (Object.hasOwn(object, property)) {
            return true
        }
    }

    
    /* function that renders the food item options */
    /* checks if the value of options is of type string*/
    /* if type string then render a single checkbox, if options is an array then map to render a checkbox for each element in array */
    function renderFoodItemOptions(foodItem, foodItemNameForId) {

        return (

            <div className="w-[70%] mx-auto max-w-sm">{
                foodItem.options.map(option => {

                    //join the options string with a "-" and change to lower case to be used for input label and id
                    const foodItemOptionsForId = option.toLowerCase().split(" ").join("-")
                    const optionId = `${foodItemNameForId}-option-${foodItemOptionsForId}`

                    return (

                        <div key={option} className="flex mb-2">
                        
                            <label htmlFor={optionId}>{option}</label>
                            <input
                                type="checkbox"
                                id={optionId}
                                name="options"
                                value={option}
                                onChange={handleChange}
                                className="scale-150 ml-auto"
                            />
                            
                        </div>
                    )

                })
            }</div>
            
        )
    }

    return(
        <ul key={props.foodItem.id} className="border-b-2 border-slate-400 last:border-none py-4">
            <li className="mb-2">

                <div className="flex justify-center gap-1">
                    <p className="font-semibold">{props.foodItem.name}</p>

                    {/* if food item has property "quantity" then render quantity value */}
                    {objectHasProperty(props.foodItem, "quantity") && <p className="text-sm self-center">({props.foodItem.quantity})</p>}

                </div>
            </li>

            {/* styles */}
            {/* if food item has property "styles" then map */}
            {objectHasProperty(props.foodItem, "styles") &&
                <li className="flex flex-col w-[70%] mx-auto mb-2">
                    
                    <label htmlFor={`${foodItemNameForId}-styles`} className="mb-1">Styles</label>
                    <select
                        name="styles"
                        id={`${foodItemNameForId}-styles`}
                        className="p-2 border-2 border-slate-400 rounded-sm text-center self-center w-full max-w-sm bg-white "
                        onChange={handleChange}
                        ref={styleRef}
                    >
                        
                        {props.foodItem.styles.map(style => {
                            return (<option value={style} key={style}>{style}</option>)
                        })}
                    </select>
                    
                </li>
            }

            {/* options */}
            {/* if food item has property "options then render options" */}
            {objectHasProperty(props.foodItem, "options") &&
                
                <li className="my-4">{renderFoodItemOptions(props.foodItem, foodItemNameForId)}</li>
                
            }

            {/* with */}
            {/* if food item has property "with" then map */}
            {objectHasProperty(props.foodItem, "with") &&
                <li className="flex flex-col w-[70%] mx-auto mb-2">
                
                    <label htmlFor={`${foodItemNameForId}-with`} className="mb-1">With</label>
                    <select
                        name="with"
                        id={`${foodItemNameForId}-with`}
                        className="p-2 border-2 border-slate-400 rounded-sm text-center self-center w-full max-w-sm bg-white"
                        onChange={handleChange}
                        ref={withRef}
                    >

                        {props.foodItem.with.map(item => {
                            return (<option value={item} key={item}>{item}</option>)
                        })}
                    </select>
                    
                </li>
            }

            {/* price */}
            <li className="mb-2">£{props.foodItem.price.toFixed(2)}</li>

            <button 
                className="bg-green-800 text-white p-2 rounded-sm hover:bg-green-700 sm:w-1/2 max-w-xs" 
                onClick={() => props.handleAddItem(props.foodItem.name, props.foodItem.price, styleRef.current.value, withRef.current.value,options)}
            >Add to Order</button>
            


        </ul>
    )
}