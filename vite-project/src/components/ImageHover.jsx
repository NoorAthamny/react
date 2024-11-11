import { useRef } from "react";
import image1 from "../../public/images/image1.jpg";
import image1black from "../../public/images/image1black.jpg";
import image2 from "../../public/images/image2.jpg";
import image2black from "../../public/images/image2black.jpg";

const ImageHover = () => {
  const colorImage1 = useRef(null);
  const colorImage2 = useRef(null);

  const mouseOver = (ref, img) => {
    ref.current.src = img;
  };

  const mouseOut = (ref, img) => {
    ref.current.src = img;
  };
  return (
    <div>
      <img
        onMouseEnter={() => mouseOver(colorImage1, image1black)}
        onMouseLeave={() => mouseOut(colorImage1, image1)}
        ref={colorImage1}
        width="200px"
        src={image1}
        alt="image-1-color"
      />
      <img
        onMouseEnter={() => mouseOver(colorImage2, image2black)}
        onMouseLeave={() => mouseOut(colorImage2, image2)}
        ref={colorImage2}
        width="200px"
        src={image2}
        alt="image-1-color"
      />
    </div>
  );
};

export default ImageHover;
