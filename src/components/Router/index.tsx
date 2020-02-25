import * as React from 'react';
import {Switch, Route} from "react-router-dom";
import ServicesList from '../ServicesList';
import ServiceDetail from '../ServiceDetail';
import ErrorPage from '../ErrorPage';

const SiteRouter = () => {
    return (
        <Switch>
            <Route path="/" component={ServicesList} exact />
            <Route path="/:id/details" component={ServiceDetail} />
            <Route path="*" component={ErrorPage} />
        </Switch>
    );
};

export default SiteRouter;