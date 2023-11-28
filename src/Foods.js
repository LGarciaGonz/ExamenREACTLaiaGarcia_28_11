import React, {  useState } from "react";
import "./Foods.css";
import FoodOrder from "./FoodOrder";
import { useContext } from 'react';
import { ItemsContext } from "./contextos/AppContext";

const Foods = (props) => {
  const [selectedFood, setSelectedFood] = useState("");

  const ItemCtx = useContext(ItemsContext)

  const handleSelect = (event) => {
    setSelectedFood(
      props.foodItems.find((item) => {
        return ItemCtx.id === parseInt(event.currentTarget.dataset.id);
      })
    );
  };

  return (
    <>
      {!selectedFood && (
        <div>
          <h4 className="foodTitle">Choose from our Menu</h4>
          <ul className="ulFoods">
            {props.foodItems.map((item) => {
              return (
                <li
                  key={ItemCtx.id}
                  className="liFoods"
                  data-id={ItemCtx.id}
                  onClick={handleSelect}
                >
                  <img
                    className="foodImg"
                    src={require(`./images/${ItemCtx.image}`)}
                    alt={item.name}
                  />
                  <div className="foodItem">
                    <p className="foodDesc">{ItemCtx.desc}</p>
                    <p className="foodPrice">{ItemCtx.price}$</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {selectedFood && (
        <FoodOrder
          food={selectedFood}
          returnToMenu={() => setSelectedFood("")}
        />
      )}
    </>
  );
};

export default Foods;