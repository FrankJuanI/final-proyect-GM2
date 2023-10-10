import "./Products.css";
import { Card } from "../Card/Card.jsx";
import { UseDataContext } from "../../context/DataContext.ts";

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

export function Products() {
  const resdata = UseDataContext();
  console.log("data: ", resdata);
  return (
    <div className="cards-container">
      {resdata &&
        resdata.map((product) => {
          return (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              images={product.images}
              description={product.description}
              price={product.price}
              discountPercentage={product.discountPercentage}
            />
          );
        })}
    </div>
  );
}
