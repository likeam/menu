import { useState } from "react"
import items from './data'
import Categories from "./Categories";
import Menu from "./Menu";

const App = () => {

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);
 
  const filterItems = (category) => {
    if(category === 'all'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category )
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className="menu section ">
        <div className="titie">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} />
        <Menu items={menuItems}/>
      </section>
    </main>
  )
}
export default App