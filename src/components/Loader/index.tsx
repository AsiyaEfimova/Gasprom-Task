import * as React from 'react';

interface ILoaderProps {
    isLoading:boolean
}

const Loader = (props:ILoaderProps) => {
    return (
        props.isLoading ?
            <div className="loader">Loading...</div> : null
    );
};

export default Loader;