import { useState, useEffect } from "react";
import arrow from "/right-arrow.svg";
import "./Filters.css";

export function Filters({ onFilterChange }) {
  const [categories, setCategories] = useState<string[]>([]);
  const [barFilter, setBarFilter] = useState(false);

  const [filterData, setFilterData] = useState({
    minPrice: "",
    maxPrice: "",
    title: "",
    brand: "",
    description: "",
    category: "all",
  });

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((fetchedCategories: string[]) => {
        const updatedCategories = ["all", ...fetchedCategories];
        setCategories(updatedCategories);
      });

    onFilterChange(filterData);
  }, [onFilterChange]);

  const toggleViewFilters = () => {
    setBarFilter(!barFilter);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilterData({
      ...filterData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(filterData);
    onFilterChange(filterData);
  };

  return (
    <div className="filters">
      <div className="swap-filters">
        <button onClick={toggleViewFilters} className="filters-rows">
          <img className={barFilter ? "active" : ""} src={arrow} alt="arrow" />
          <p>Filters</p>
        </button>
      </div>
      <div className={`input-filters ${barFilter ? "active" : ""}`}>
        <form className="filters-form" onSubmit={handleFormSubmit}>
          <div className="Price">
            <label htmlFor="minium-price">Price</label>
            <div className="inputs">
              <input
                type="number"
                id="minium-price"
                name="minPrice"
                min="0"
                placeholder="Minimum"
                value={filterData.minPrice}
                onChange={handleInputChange}
              />
              <input
                type="number"
                id="max-price"
                name="maxPrice"
                min="0"
                placeholder="Maximum"
                value={filterData.maxPrice}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="search title-item">
            <label htmlFor="site-search">Title</label>
            <input
              type="search"
              id="site-search"
              name="title"
              placeholder="Insert title"
              value={filterData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="search brand-item">
            <label htmlFor="site-search">Brand</label>
            <input
              type="search"
              id="site-search"
              name="brand"
              placeholder="Insert brand"
              value={filterData.brand}
              onChange={handleInputChange}
            />
          </div>
          <div className="search description-item">
            <label htmlFor="site-search">Description</label>
            <input
              type="search"
              id="site-search"
              name="description"
              placeholder="Insert description"
              value={filterData.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="select-categories">
            <label htmlFor="categories">Categories</label>
            <select
              id="categories"
              name="category"
              value={filterData.category}
              onChange={handleInputChange}
            >
              {categories
                ? categories.map((categoryName) => (
                    <option key={categoryName} value={categoryName}>
                      {categoryName}
                    </option>
                  ))
                : null}
            </select>
          </div>
          <button className="apply-filters" type="submit">
            Apply Filters
          </button>
        </form>
      </div>
    </div>
  );
}
