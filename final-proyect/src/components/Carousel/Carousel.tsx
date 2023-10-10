import { useState, useEffect } from "react";
import "./Carousel.css";

interface CarouselProps {
  pictures: string[];
}

function Carousel({ pictures }: CarouselProps) {
  const [position, setPosition] = useState(0);

  const moveRight = () => {
    setPosition((prevPosition) => (prevPosition + 1) % pictures.length);
  };

  const moveLeft = () => {
    setPosition((prevPosition) =>
      prevPosition === 0 ? pictures.length - 1 : prevPosition - 1
    );
  };

  useEffect(() => {
    const img = document.getElementById("carousel-image") as HTMLImageElement;
    img.src = pictures[position];
  }, [position, pictures]);

  const initialImage = pictures.length > 0 ? pictures[0] : "";

  return (
    <div className="carousel">
      <button className="left-btn" onClick={moveLeft}>
        <i className="arrow"></i>
      </button>
      <img
        id="carousel-image"
        className="carousel-image"
        src={initialImage}
        alt=""
      />
      <button className="right-btn" onClick={moveRight}>
        <i className="arrow"></i>
      </button>
    </div>
  );
}

export { Carousel };
