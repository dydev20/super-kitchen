import React from "react"
import Menu from "./components/Menu"
import menu from "./menu"
import FoodGroup from "./components/FoodGroup"
import PriceDisplay from "./components/PriceDisplay"

function App() {
  const [order, setOrder] = React.useState({
    items: [],
    totalPrice: 0

  })

  /* function to add to an order */
  function addToOrder(item,name,price) {
    setOrder(prevOrder => {
      return {
        
        items:[...prevOrder.items,{itemName:name,styles:item.styles}],
        totalPrice: prevOrder.totalPrice + price

      }
    })
    
  }

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
        addToOrder={addToOrder}
        orderPrice={order.totalPrice}
      />
    </div>
  )
}

export default App
