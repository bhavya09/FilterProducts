import "./styles.css";
import { items } from "./items";
import { useState, useEffect } from "react";

export default function App() {
  const filters = ["Bags", "Watches", "Sports", "Sunglasses"];
  const [filteredList, setFilteredList] = useState(items);
  const [activeFilters, setActiveFilters] = useState([]);

  const handleFilterClick = (e) => {
    const category = e.target.id;
    if (activeFilters.includes(category)) {
      const filters = activeFilters.filter((ele) => ele !== category);
      setActiveFilters(filters);
    } else {
      setActiveFilters([...activeFilters, category]);
    }
    console.log("category ", category);
  };

  const filterProducts = () => {
    if (activeFilters.length) {
      const tempItems = items.filter((item) =>
        activeFilters.includes(item.category)
      );
      setFilteredList(tempItems);
      console.log("tempItems", tempItems);
    } else {
      setFilteredList(items);
    }
  };

  useEffect(() => {
    filterProducts();
  }, [activeFilters]);

  console.log("activeFilters ", activeFilters);

  return (
    <div className="App">
      <div className="filters" onClick={handleFilterClick}>
        {filters.map((item, index) => (
          <button
            key={index}
            id={item}
            className={activeFilters.includes(item) && "selected"}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="product-list">
        {filteredList.map((item, index) => (
          <div className="item" key={index}>
            <p>{item.name}</p>
            <p className="category">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
