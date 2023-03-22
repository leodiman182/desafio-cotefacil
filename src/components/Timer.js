/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Timer = () => {
  const { 
    counter, setCounter,
    isEven, setIsEven,
    setError
    // error, timerOn, setTimerOn, 
  } = useContext(AppContext);

  useEffect(() => {
    function handleNumber() {
      if (counter < 0) {
        setError(true);
        setCounter(0);
      }

      if (counter > 0) {
        setError(false)
      }

      if (counter % 2 == 0 && counter != 0) {
        setIsEven(true);
      } else {
        setIsEven(false)
      }
    }

    handleNumber()
  }, [counter])

  return (
    <div className={classNames(isEven ? "bg-primary border-primary" : "bg-white", "flex fle-col items-center justify-center text-center border-[4px] rounded-md w-[200px] h-[200px] mx-auto pt-[25px]")}>
      <p className={classNames(isEven ? "text-white" : "text-gray-600", "text-[150px] md:text-[120px]")}>
        {counter}
      </p>
    </div>
  )
}

export default Timer;
