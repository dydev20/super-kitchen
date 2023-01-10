import React from "react"
import Menu from "./components/Menu"
import menu from "./menu"
import FoodGroup from "./components/FoodGroup"

function App() {
  const [order, setOrder] = React.useState({
    items: [],
    totalPrice: 0

  })

  /* function to add to an order */
  function addToOrder(price) {
    setOrder(order => {
      return {

        totalPrice: order.totalPrice + price

      }
    })
    console.log(order)

  }

  return (
    <div className="App">
      <Menu />
      

      <FoodGroup 
        name="Appetisers"
        foodGroup={menu.appetisers}
      />
      <FoodGroup 
        name="Soups"
        foodGroup={menu.soups}
      />
      <FoodGroup 
        name="Curry"
        foodGroup={menu.curry}
      />
      <FoodGroup 
        name="Sweet & Sour Batter Style"
        foodGroup={menu.sweetSourBatter}
      />
      <FoodGroup 
        name="Sweet & Sour HK Style"
        foodGroup={menu.sweetSourHK}
      />
      <FoodGroup 
        name="Chow Mein"
        foodGroup={menu.chowMein}
      />
      <FoodGroup 
        name="Fried Rice"
        foodGroup={menu.friedRice}
      />
      
      <FoodGroup 
        name="Sides"
        foodGroup={menu.sides}
      />


    </div>
  )
}

export default App
