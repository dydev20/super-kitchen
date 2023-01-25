import React from "react"
import Menu from "./components/Menu"
import menu from "./menu"
import FoodGroup from "./components/FoodGroup"
import PriceDisplay from "./components/PriceDisplay"
import ViewOrder from "./components/ViewOrder"

function App() {
  
  const [order, setOrder] = React.useState([])
  
  const [totalPrice,setTotalPrice]=React.useState(0)

  const [viewOrder, setViewOrder] = React.useState(true)

  const [addItem,setAddItem]=React.useState({
    id:0,
    name:"",
    price:0
  })

  /* function that adds the options array, value of selects into the addItem object when Add to Order button is clicked  */
  function handleAddItem(name,price,style,withSide,options){
      
    setAddItem(prevAddItem=>{
      return{
        id:prevAddItem.id+1,
        name: name,
        price: price,
        options: options,
        styles: style,
        with: withSide
      }
    })
      
  }

  /* function that removes the selected item from the order */
  function handleRemoveItem(id){
    setOrder(order.filter(item=>item.id !==id))
  }

  /* when View Order button is clicked, only display order when there are items added to the order*/
  function handleViewOrder() {
    if(totalPrice!==0){
      setViewOrder(!viewOrder)
    }
  }

  /* function that adds the selected food item to the order */
  function addToOrder(item) {

    setOrder(prevOrder => {

      return [
        ...prevOrder, item

      ]
    })
  }
  
  
  /* when there are no items in the order, close View Order */
  React.useEffect(()=>{
    if(totalPrice===0){
      setViewOrder(!viewOrder)
    }
  },[totalPrice])

  /* when order state changes, calculate and set totalPrice state */
  React.useEffect(()=>{

    setTotalPrice(order.reduce((total, item) => {
      return total + item.price
    }, 0))
    
  },[order])

  /* adds item to the order when addItem is set*/
  React.useEffect(()=>{
    addToOrder(addItem)
  },[addItem])
  

  return (
    <div className="App">
          
      <div className={viewOrder ? "hidden" :"block"}>
        <Menu />

        <FoodGroup 
          name="Appetisers"
          foodGroup={menu.appetisers}
          addToOrder={addToOrder}
          handleAddItem={handleAddItem}
        />
        <FoodGroup 
          name="Soups"
          foodGroup={menu.soups}
          addToOrder={addToOrder}
          handleAddItem={handleAddItem}
        />
        <FoodGroup 
          name="Curry"
          foodGroup={menu.curry}
          addToOrder={addToOrder}
          handleAddItem={handleAddItem}
        />
        <FoodGroup 
          name="Sweet & Sour Batter Style"
          foodGroup={menu.sweetSourBatter}
          addToOrder={addToOrder}
          handleAddItem={handleAddItem}
        />
        <FoodGroup 
          name="Sweet & Sour HK Style"
          foodGroup={menu.sweetSourHK}
          addToOrder={addToOrder}
          handleAddItem={handleAddItem}
        />
        <FoodGroup 
          name="Chow Mein"
          foodGroup={menu.chowMein}
          addToOrder={addToOrder}
          handleAddItem={handleAddItem}
        />
        <FoodGroup 
          name="Fried Rice"
          foodGroup={menu.friedRice}
          addToOrder={addToOrder}
          handleAddItem={handleAddItem}
        />
        
        <FoodGroup 
          name="Sides"
          foodGroup={menu.sides}
          addToOrder={addToOrder}
          handleAddItem={handleAddItem}
        />
        <PriceDisplay 
          totalPrice={totalPrice}
          handleViewOrder={handleViewOrder}
        />
      </div>

      {viewOrder && 
        <ViewOrder 
          order={order}
          viewOrder={viewOrder}
          totalPrice={totalPrice}
          handleViewOrder={handleViewOrder}
          handleRemoveItem={handleRemoveItem}
        />}
      
      
      
    </div>
  )
}

export default App
