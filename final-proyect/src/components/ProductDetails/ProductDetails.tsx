import { Nav } from "../Nav/Nav";
import { Carousel } from "../Carousel/Carousel";

export function ProductsDetails() {
  const pictures = [
    "https://nikearprod.vtexassets.com/arquivos/ids/311222/DD8959_108_A_PREM.jpg?v=638122456034070000",
    "https://nikearprod.vtexassets.com/arquivos/ids/699311/DH2920_001_A_PREM.jpg?v=638229667061330000",
    "https://nikearprod.vtexassets.com/arquivos/ids/698461/DH4072_001_A_PREM.jpg?v=638229587866770000",
  ];
  return (
    <>
      <Nav />
      <div className="content">
        <Carousel pictures={pictures} />
        <div className="product-info">
          <h1>Nike Air 232</h1>
          <p>Apple</p>
          <div className="price">
            <p>550</p>
            <p>320</p> {/* se tiene que calcular */}
          </div>
          <div className="stock">
            <p>34</p>
            <div className="stock-bar">
              <div></div>
            </div>
          </div>
          <div className="description">
            <p>description</p>
            <h2>An apple mobile which is nothing like apple"</h2>
            <p>Read More</p>
          </div>
          <div className="buy">
            <p>Quantity</p>
            <button>dsdsd</button>
            <p>Maxim Purchase: 5</p>
            <div className="buttons-actions">
              <button>Buy Now</button>
              <button>Add to Cart</button>
              <button>Wish List</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
