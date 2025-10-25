import {Button} from "./components/Button.tsx";
import {Display} from "./components/Display.tsx";

type TypeProps = {
    maxValue: number;
    startValue: number;
    counter: number;
    incrCounter: () => void
    resetCounter: () => void
    isSet: boolean;
    handlerSet: () => void;
}

export const Counter = ({maxValue, startValue, counter, incrCounter, resetCounter, isSet, handlerSet}: TypeProps) => {


    const incrCounterHandler = () => {
        incrCounter()
    }

    const resetCounterHandler = () => {
        resetCounter()
    }


    return (
        <div className="wrapper">
            <div className="display">


                {maxValue <= startValue || startValue <= -1 ? <span className={"error"}>Incorrect value!</span> :
                    <Display className={counter === maxValue ? 'active' : "number"}
                             result={counter} isSet={isSet}/>}
            </div>
            <div className="buttons">
                <Button
                    className={"button"}
                    disabled={!isSet || counter >= maxValue}
                    name={"inc"}
                    onClickFunction={incrCounterHandler}/>
                <Button
                    className={"button"}
                    disabled={!isSet}
                    name={"reset"}
                    onClickFunction={resetCounterHandler}/>
                <Button
                    className={"button"}
                    disabled={!isSet}
                    name={"set"}
                    onClickFunction={handlerSet}/>
            </div>
        </div>
    )
};

