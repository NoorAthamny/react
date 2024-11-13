import { useEffect, useState } from "react";

const FavoriteColor = () => {
  const [favoriteColor, setfavoriteColor] = useState("purple");

  useEffect(() => {
    const changeColor = setTimeout(() => {
      setfavoriteColor("blue");
      console.log("blue");
    }, 1000);

    return () => clearTimeout(changeColor);
  });

  return (
    <div>
      <h1>{favoriteColor}</h1>
    </div>
  );
};

export default FavoriteColor;
