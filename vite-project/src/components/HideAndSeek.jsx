import { useState } from "react";

const HideAndSeek = () => {
  const [isVisible, setIsVisible] = useState(true);

  const showHideFn = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <section className="show-sec">
        <button onClick={showHideFn} type="button">
          {isVisible ? "Hide" : "Show"}
        </button>
        {isVisible && <div className="show-hide"></div>}
      </section>
    </>
  );
};

export default HideAndSeek;
