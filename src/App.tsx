import './App.css'
import {Counter} from "./Counter.tsx";
import {useEffect, useState} from "react";
import {SetCounter} from "./SetCounter.tsx";

function App() {
    const getInitialMaxValue= () => {
        const stored = sessionStorage.getItem('maxValueCounter')
        return stored ? JSON.parse(stored) : 5;
    }
    const getInitialStartValue = () => {
        const stored = sessionStorage.getItem('startValueCounter')
        return stored ? JSON.parse(stored) : 0;
    }


    const [maxValue, setMaxValue] = useState<number>(getInitialMaxValue);
    const [startValue, setStartValue] = useState<number>(getInitialStartValue);
    const [isSet, setIsSet] = useState<boolean>(true);
    const [counter, setCounter] = useState(startValue);
    const [set, setSet] = useState<boolean>(true);

    useEffect(() => {
        sessionStorage.setItem('maxValueCounter', JSON.stringify(maxValue));
    }, [maxValue]);

    useEffect(() => {
        sessionStorage.setItem('startValueCounter', JSON.stringify(startValue));
    }, [startValue]);


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
        setSet(!set); // закомментировать для двойного счетчика
        if (startValue >= 0 && maxValue > startValue) {
            setCounter(startValue);
            setIsSet(true);
        }
    }


    return (
        <div className="App">
            {set
                ? <Counter maxValue={maxValue} startValue={startValue} counter={counter} incrCounter={incrCounter}
                           resetCounter={resetCounter} isSet={isSet} handlerSet={handlerSet}/>
                : <SetCounter isSet={isSet} handlerSet={handlerSet} setIsSet={setIsSetCounter}
                              setStartValue={setStartValueCounter} setMaxValue={setMaxValueCounter} maxValue={maxValue}
                              startValue={startValue}/>
            }
            {/*{код выше закомментировать для двойного счетчика, а код ниже раскомментировать}*/}

           {/* <SetCounter isSet={isSet} handlerSet={handlerSet} setIsSet={setIsSetCounter}
                        setStartValue={setStartValueCounter} setMaxValue={setMaxValueCounter} maxValue={maxValue}
                        startValue={startValue}/>
            <Counter maxValue={maxValue} startValue={startValue} counter={counter} incrCounter={incrCounter}
                     resetCounter={resetCounter} isSet={isSet} handlerSet={handlerSet}/>*/}

        </div>

    )
}

export default App
