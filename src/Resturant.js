import React, { useState } from "react";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import "./Resturant.css";

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);

  const filterItem = (category) => {
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="btn-group">
          <button className="btn-item" onClick={() => filterItem("breakfast")}>
            Breakfast{" "}
          </button>
          <button className="btn-item" onClick={() => filterItem("lunch")}>
            Lunch
          </button>
          <button className="btn-item" onClick={() => filterItem("evening")}>
            Evening{" "}
          </button>
          <button className="btn-item" onClick={() => filterItem("dinner")}>
            Dinner{" "}
          </button>
          <button className="btn-item" onClick={() => filterItem("all")}>
            All
          </button>
        </div>
      </nav>
      <MenuCard menuData={menuData} />
    </div>
  );
};

export default Resturant;
