import { Card } from "../Card/Card.jsx";
import { UseDataContext } from "../../context/DataContext.ts";
import "../Products/Products.css";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: [];
}

interface ProductsProps {
  filterCriteria: {
    minPrice: string;
    maxPrice: string;
    title: string;
    brand: string;
    description: string;
    category: string;
  };
}

export function Products({ filterCriteria }) {
  const resdata = UseDataContext();

  if (!resdata) {
    return null; // Puedes mostrar un mensaje de carga mientras se obtienen los datos
  }

  // Filtra los productos según filterCriteria
  const filteredProducts = resdata.filter((product) => {
    // Si la categoría es "All" o coincide con la categoría del producto, y se cumplen las demás condiciones, muestra el producto
    if (
      (filterCriteria.category === "all" ||
        product.category === filterCriteria.category) &&
      (filterCriteria.minPrice === "" ||
        product.price >= parseFloat(filterCriteria.minPrice)) &&
      (filterCriteria.maxPrice === "" ||
        product.price <= parseFloat(filterCriteria.maxPrice)) &&
      (filterCriteria.title === "" ||
        product.title
          .toLowerCase()
          .includes(filterCriteria.title.toLowerCase())) &&
      (filterCriteria.brand === "" ||
        product.brand
          .toLowerCase()
          .includes(filterCriteria.brand.toLowerCase())) &&
      (filterCriteria.description === "" ||
        product.description
          .toLowerCase()
          .includes(filterCriteria.description.toLowerCase()))
    ) {
      return true;
    }

    return false;
  });

  return (
    <div
      className="products"
      style={{ display: filteredProducts.length === 0 ? "flex " : "grid" }}
    >
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => {
          return <Card key={product.id} productDetail={product} />;
        })
      ) : (
        <p className="text-not-match">
          No products were found that match the filters.
        </p>
      )}
    </div>
  );
}
