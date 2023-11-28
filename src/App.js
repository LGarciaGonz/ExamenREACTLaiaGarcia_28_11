import "./App.css";
import React, { useState } from "react";
import Foods from "./Foods";
export const foodItemsContext = React.createContext();
import { FoodsContext } from "./contextos/AppContext";

const App = () => {
  const [isChooseFoodPage, setIsChooseFoodPage] = useState(false);
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Chicken Burger",
      quantity: 40,
      desc: "Fried chicken burger - lettuce, tomato, cheese and mayonnaise",
      price: "24",
      image: "cb.jpg",
    },
    {
      id: 2,
      name: "Veg Burger",
      quantity: 30,
      desc: "Plant-based burger — lettuce, tomato, vegan cheese and mayonnaise",
      price: "22",
      image: "vb.jpg",
    },
    {
      id: 3,
      name: "Chips",
      quantity: 50,
      desc: "Potato chips fried to perfection",
      price: "7",
      image: "chips.jpg",
    },
    {
      id: 4,
      name: "Ice Cream",
      quantity: 30,
      desc: "Ice cream - Vanilla ice cream double scoop",
      price: "4",
      image: "ic.jpg",
    },
  ]);


  return (
    <FoodsContext.Provider value={menuItems}>
    <div className="App">
      
        
      
      <h3 className="title">Just Food Online Shop</h3>
     
        
          <h4 className="subTitle">Menu Availability</h4>
          <ul className="ulApp">
            {menuItems.map((item) => {
              return (
                <li key={foodItemsContext.id} className="liApp">
                  {foodItemsContext.name} - {foodItemsContext.quantity}
                </li>
              );
            })}
          </ul>
        
      
      
        <Foods
          foodItems={foodItemsContext.menuItems}
        
        ></Foods>
      
    </div>
    </FoodsContext.Provider>
  );
};

export default App;
