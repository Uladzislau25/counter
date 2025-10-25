type TittlePropsType = {
    result: number;
    className?: string
    isSet: boolean
}

export const Display = ({result, className, isSet}: TittlePropsType) => {

    return (
        <div>
            <span className={className}>{isSet ? result :
                <span className={"span"}>enter values and press 'set'</span>}</span>
        </div>
    );
};
