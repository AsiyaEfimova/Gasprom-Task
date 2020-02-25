import * as React from 'react';

interface IErrorProps {
    error:any,
    clickHandler?: any
}

const ErrorMessage = (props:IErrorProps) => {
    const handlerClick = (e:any) => {
        e.preventDefault();
        props.clickHandler();
    };
    return (
        (props.error !== null) ? (
            <div className="errorMessage">{props.error.message} <a href='/' onClick={handlerClick}>Повторить запрос</a></div>
        ) : null
    );
};

export default ErrorMessage;