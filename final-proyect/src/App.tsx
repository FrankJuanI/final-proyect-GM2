import "./App.css";
import { Home } from "./components/Home/Home";
import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch.ts";
import { DataContext } from "./context/DataContext.ts";

// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   discountPercentage: number;
//   rating: number;
//   stock: number;
//   brand: string;
//   category: string;
//   thumbnail: string;
//   images: [];
// }

function App() {
  const { data } = useFetch();
  console.log(data);
  return (
    <>
      <DataContext.Provider value={data}>
        <Home />
      </DataContext.Provider>
    </>
  );
}

export default App;
