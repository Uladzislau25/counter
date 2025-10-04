type TittlePropsType = {
    result: number
    className?: string
}

export const Display = ({result, className}:TittlePropsType) => {
    return (
        <div>
            <h1 className={className}>{result}</h1>
        </div>
    );
};
