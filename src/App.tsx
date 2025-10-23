import './App.css'
import {Counter} from "./Counter.tsx";
import {useState} from "react";
import {SetCounter} from "./SetCounter.tsx";

function App() {
    const [maxValue, setMaxValue] = useState<number>(5);
    const [startValue, setStartValue] = useState<number>(0);
    const [isSet, setIsSet] = useState<boolean>(true);
    const [counter, setCounter] = useState(startValue);

    const incrCounter = () => {
        if (counter < maxValue) {
            setCounter(counter + 1);
        }
    }
    const setMaxValueCounter = (num: number) => {
        setMaxValue(num);
    }

    const resetCounter = () => {
        setCounter(startValue);
    }
    const setStartValueCounter = (num: number) => {
        setStartValue(num);
    }
    const setIsSetCounter = (b: boolean) => {
        setIsSet(b)
    }
    const handlerSet = () => {
        if (startValue >= 0 && maxValue > startValue) {
            setCounter(startValue);
            setIsSet(true);
        }
    }



  return (
      <div className="App">
          <SetCounter isSet={isSet} handlerSet={handlerSet} setIsSet={setIsSetCounter} setStartValue={setStartValueCounter} setMaxValue={setMaxValueCounter} maxValue={maxValue} startValue={startValue}/>
          <Counter maxValue={maxValue} startValue={startValue} counter={counter} incrCounter={incrCounter} resetCounter={resetCounter} isSet={isSet} />
      </div>

  )
}

export default App
