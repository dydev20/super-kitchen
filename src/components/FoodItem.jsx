import React from "react"

export default function FoodItem(props){
    const styleRef=React.useRef("")
    const withRef=React.useRef("")

    const [options, setOptions] = React.useState([])

    const [addItem,setAddItem]=React.useState({
        name:"",
        price:0
    })

    /* function that adds the options array, value of selects into the addItem object when Add to Order button is clicked  */
    function handleAddItem(name,price){
        
        setAddItem({
            name:name,
            price:price,
            options:options,
            styles:styleRef.current.value,
            with:withRef.current.value
        })
        
    }

    /* adds item to the order when addItem is set*/
    React.useEffect(()=>{
        props.addToOrder(addItem)
    },[addItem])
    

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
    function renderFoodItemOptions(foodItem) {



        if (typeOfValueIsString(foodItem.options) === true) {
            return (
                <div className="w-[70%] mx-auto max-w-sm">                
                    <div className="flex">
                        
                        <label htmlFor="option">{foodItem.options}</label>
                        <input
                            type="checkbox"
                            id="option"
                            name="options"
                            value={foodItem.options}
                            onChange={handleChange}
                            className="scale-150 ml-auto"
                        />
                        
                    </div>
                </div>
            )
        } else {
            return (

                <div className="w-[70%] mx-auto max-w-sm">{
                    foodItem.options.map(option => {

                        return (

                            <div key={option} className="flex mb-2">
                            
                                <label htmlFor="options">{option}</label>
                                <input
                                    type="checkbox"
                                    id="options"
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
                    
                    <label htmlFor="styles" className="mb-1">Styles</label>
                    <select
                        name="styles"
                        id="styles"
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
                
                <li className="my-4">{renderFoodItemOptions(props.foodItem)}</li>
                
            }

            {/* with */}
            {/* if food item has property "with" then map */}
            {objectHasProperty(props.foodItem, "with") &&
                <li className="flex flex-col w-[70%] mx-auto mb-2">
                
                    <label htmlFor="with" className="mb-1">With</label>
                    <select
                        name="with"
                        id="with"
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
                className="bg-green-800 text-white p-2 rounded-sm sm:w-1/2 max-w-xs" 
                onClick={()=>handleAddItem(props.foodItem.name,props.foodItem.price)}
            >Add to Order</button>
            


        </ul>
    )
}