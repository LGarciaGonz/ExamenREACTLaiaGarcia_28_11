import Order from "./Order";
import { MenuContext } from "./contextos/AppContext";
const Menu = () => {

  const MenuCtx = useContext(MenuContext)

  console.log(`Due to shop ${MenuCtx.isOpen}, Menu component rendered`);
  return (
    <>
    <MenuContext.Provider>
      <ul>
        <li><span class="food">Fried chicken burger - lettuce, tomato, cheese and mayonnaise </span><br /><Order isOpen={MenuCtx.isOpen} /></li>
        <li><span class="food">Plant-based burger -- letyce, tomato, vegan cheese and mayonnaise </span><br /><Order isOpen={MenuCtx.isOpen} /></li>
        <li><span class="food">Potato chips fried to perfection <br /></span><Order isOpen={MenuCtx.isOpen} /></li>
        <li><span class="food">Ice cream - Vanilla ice cream double scoop</span><br /><Order isOpen={MenuCtx.isOpen} /></li>
      </ul>
      </MenuContext.Provider>
    </>
  );
};
export default Menu;