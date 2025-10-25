import {Button} from "./components/Button.tsx";
import type {ChangeEvent} from "react";

type SetCounterProps = {
    maxValue: number
    startValue: number
    isSet: boolean
    setMaxValue: (num: number) => void;
    setStartValue: (num: number) => void;
    setIsSet: (b: boolean) => void;
    handlerSet: () => void;
}

export const SetCounter = ({
                               maxValue,
                               startValue,
                               setMaxValue,
                               setStartValue,
                               isSet,
                               setIsSet,
                               handlerSet
                           }: SetCounterProps) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        const {id, value} = e.target;
        const num = Number(value);

        if (id === 'maxValue') {
            setMaxValue(num);
        } else if (id === 'startValue') {
            setStartValue(num);
        }
        setIsSet(false);
    }
    const er = startValue <= -1 || maxValue <= startValue ? 'ErrorInput' : 'Input';

    return (
        <div className="wrapper">
            <div className="display">
                <div className={"field"}>
                    <label className={"label"}> max value:</label>
                    <input id={'maxValue'} className={er} onChange={handleChange} value={maxValue}
                           type={"number"}/>
                </div>
                <div className={"field"}>
                    <label className={"label"}> start value:</label>
                    <input id={'startValue'} className={er} onChange={handleChange} value={startValue}
                           type={"number"}/>

                </div>

            </div>
            <div className="buttons">

                <Button
                    disabled={startValue <= -1 || maxValue <= startValue || isSet}
                    className={"button"}
                    name={"set"}
                    onClickFunction={handlerSet}/>
            </div>
        </div>
    );
};
