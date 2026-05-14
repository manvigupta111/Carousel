import { useEffect, useRef, useState } from "react";
import "./Carousel.css";
import data from "../Data.json";

export default function Carousel() {
  const ref = useRef(null);
  const [currImgIndex, setCurrImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrImageIndex((prev) => (prev > 0 ? prev - 1 : data.length - 1));
    return;
  };

  const handleNext = () => {
    setCurrImageIndex((prev) => (prev < data.length - 1 ? prev + 1 : 0));
    return;
  };

  useEffect(() => {
    ref.current = setInterval(handleNext, 1000);
    return () => {
      clearInterval(ref.current);
    };
  }, []);

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => clearInterval(ref.current)}
      onMouseLeave={() => {
        ref.current = setInterval(handleNext, 1000);
      }}
    >
      <button className="left-btn" onClick={handlePrev}>
        {"<"}
      </button>
      <img src={data[currImgIndex].download_url} />
      <button className="right-btn" onClick={handleNext}>
        {">"}
      </button>
    </div>
  );
}
