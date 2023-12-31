import { useState } from "react";
import { Filters } from "../Filters/Filters";
import { Products } from "../Products/Products";
import { Nav } from "../Nav/Nav";
import { Toaster } from "sonner";
import "./Shop.css";

export function Shop() {
  const [filterCriteria, setFilterCriteria] = useState({
    minPrice: "",
    maxPrice: "",
    title: "",
    brand: "",
    description: "",
    category: "smartphones",
  });

  const handleFilterChange = (newCriteria) => {
    setFilterCriteria(newCriteria);
  };

  return (
    <>
      <Nav />
      <div className="all-content">
        <Toaster position="bottom-left" richColors />
        <Filters onFilterChange={handleFilterChange} />
        <Products filterCriteria={filterCriteria} />
      </div>
    </>
  );
}
