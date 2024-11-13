import { useEffect, useState } from "react";

const Spiner = () => {
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [spinnerType, setSpinnerType] = useState("");

  useEffect(() => {
    const spinners = ["spinner1", "spinner2", "spinner3"];
    const randomSpinner = spinners[Math.floor(Math.random() * spinners.length)];
    setSpinnerType(randomSpinner);

    const timer = setTimeout(() => {
      setIsTimerActive(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isTimerActive ? (
        <div className={spinnerType}></div>
      ) : (
        <p>Timer finished!</p>
      )}
    </div>
  );
};

export default Spiner;
