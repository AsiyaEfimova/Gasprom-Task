import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="errorBox">
            <h1>404</h1>
            <Link to="/">Перейти на главную</Link>
        </div>
    );
};

export default ErrorPage;