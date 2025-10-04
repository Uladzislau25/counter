type PropsType = {
    name: string;
    onClickFunction: () => void
    className?: string;
    disabled?: boolean;
}

export const Button = ({name, onClickFunction, className, disabled}: PropsType) => {
    return (

        <button disabled={disabled} className={className} onClick={onClickFunction}>/{name}</button>


    );
};
