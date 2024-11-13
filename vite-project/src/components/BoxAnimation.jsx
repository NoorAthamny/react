import { useEffect, useState } from "react";

const BoxAnimation = ({ size }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showBox = setTimeout(() => {
      setVisible(true);
    }, 1000);

    const hideBox = setTimeout(() => {
      setVisible(false);
    }, 4000);

    return () => {
      clearTimeout(showBox);
      clearTimeout(hideBox);
    };
  }, []);

  if (!visible) return null;

  return <div style={{ width: size, height: size }} className="box"></div>;
};

export default BoxAnimation;
