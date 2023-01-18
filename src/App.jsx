import React from "react"
import Menu from "./components/Menu"
import menu from "./menu"
import FoodGroup from "./components/FoodGroup"
import PriceDisplay from "./components/PriceDisplay"

function App() {
  
  const [order, setOrder] = React.useState([])
  
  const [totalPrice,setTotalPrice]=React.useState(0)

  /* function that adds the selected food item to the order */
  function addToOrder(item) {

    setOrder(prevOrder => {

      return [
        ...prevOrder, item

      ]

    })

  }

  /* when order state changes, calculate and set totalPrice state */
  React.useEffect(()=>{

    setTotalPrice(order.reduce((total, item) => {
      return total + item.price
    }, 0))
    
  },[order])

  
  
  return (
    <div className="App">
      <Menu />
      

      <FoodGroup 
        name="Appetisers"
        foodGroup={menu.appetisers}
        addToOrder={addToOrder}
      />
      <FoodGroup 
        name="Soups"
        foodGroup={menu.soups}
        addToOrder={addToOrder}
      />
      <FoodGroup 
        name="Curry"
        foodGroup={menu.curry}
        addToOrder={addToOrder}
      />
      <FoodGroup 
        name="Sweet & Sour Batter Style"
        foodGroup={menu.sweetSourBatter}
        addToOrder={addToOrder}
      />
      <FoodGroup 
        name="Sweet & Sour HK Style"
        foodGroup={menu.sweetSourHK}
        addToOrder={addToOrder}
      />
      <FoodGroup 
        name="Chow Mein"
        foodGroup={menu.chowMein}
        addToOrder={addToOrder}
      />
      <FoodGroup 
        name="Fried Rice"
        foodGroup={menu.friedRice}
        addToOrder={addToOrder}
      />
      
      <FoodGroup 
        name="Sides"
        foodGroup={menu.sides}
        addToOrder={addToOrder}
      />

      <PriceDisplay 
        totalPrice={totalPrice}
      />

    </div>
  )
}

export default App
