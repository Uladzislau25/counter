import {Button} from "./components/Button.tsx";
/*import {useState} from "react";*/
import {Display} from "./components/Display.tsx";


export const Counter = () => {
    /*const [counter, setCounter] = useState(0);

    const incrCounter = () => {
        if (counter < 5) {
            setCounter(counter + 1);
        }
    }

    const resetCounter = () => {
        setCounter(0);
    }*/

    return (
        <div className="wrapper">
            <div className="display">
                <Display {/* className={counter === 5 ? 'active' : ""}*/}
                         /*result={counter}*//>
            </div>
            <div className="buttons">
                <Button
                    /*className={"button"}*/
                    /*disabled={counter === 5}*/
                    name={"inc"}
                   /* onClickFunction={incrCounter}*//>
                <Button
                    /*className={"button"}*/
                    /*disabled={counter === 0}*/
                    name={"reset"}
                    /*onClickFunction={resetCounter}*//>
            </div>
        </div>
    )
};

