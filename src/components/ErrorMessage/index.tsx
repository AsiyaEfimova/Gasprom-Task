import * as React from 'react';

interface IErrorProps {
    error:string
}

const ErrorMessage = (props:IErrorProps) => {
    return (
        (props.error !== null) ?
            <div className="errorMessage">{props.error}</div> : null
    );
};

export default ErrorMessage;