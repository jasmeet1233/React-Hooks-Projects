import React, { useState } from "react";
import Categories from "./Categories";
import items from "./data/data";
import "./index.css";
import Menu from "./Menu";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState("");

  const allCategories = new Set(items.map((item) => item.category));
  const categoryArr = ['all', ...allCategories];

  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(items);
      return;
    }
    const updatedCategory = items.filter((item) => item.category === category);
    setMenuItems(updatedCategory)
  };

  return (
    <section>
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories filterItems = {filterItems} categoryArr = {categoryArr}/>
      <Menu menuItemsArr={menuItems} />
    </section>
  );
}

export default App;
