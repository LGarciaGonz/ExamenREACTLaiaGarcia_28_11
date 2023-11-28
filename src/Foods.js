import "./Foods.css";
import FoodOrder from "./FoodOrder";
import { ItemsContext } from "./contextos/AppContext";
import { useState, useContext } from 'react';

const Foods = () => {
  const [selectedFood, setSelectedFood] = useState("");

  const ItemsCtx = useContext(ItemsContext);
  
  const handleSelect = (event) => {
    setSelectedFood(
      ItemsCtx.foodItems.find((item) => {
        return item.id === parseInt(event.currentTarget.dataset.id);
      })
    );
  };

  return (
    <>
    <ItemsContext.Provider>

          {!selectedFood && (
            <div>
              <h4 className="foodTitle">Choose from our Menu</h4>
              <ul className="ulFoods">
                {ItemsCtx.foodItems.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="liFoods"
                      data-id={item.id}
                      onClick={handleSelect}
                    >
                      <img
                        className="foodImg"
                        src={require(`./images/${item.image}`)}
                        alt={item.name}
                      />
                      <div className="foodItem">
                        <p className="foodDesc">{item.desc}</p>
                        <p className="foodPrice">{item.price}$</p>
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
      </ItemsContext.Provider>
    </>
  );
};

export default Foods;