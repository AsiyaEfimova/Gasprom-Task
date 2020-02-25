import * as React from 'react';
import * as Redux from 'react-redux';
import { Link } from "react-router-dom";
import {
    fetchServiceListRequest,
    getServicesList,
    getIsLoading,
    getError
} from '../../modules/servicesList';
import {IServicesList} from '../../api';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';

interface IState {
    serviceList: IServicesList[]
}

const ServicesList: React.FunctionComponent = () => {
    let initialState:IState = {serviceList : []};

    const [services, setServices] = React.useState(initialState);

    const dispatch = Redux.useDispatch();

    const isLoading:boolean = Redux.useSelector(getIsLoading),
        error = Redux.useSelector(getError),
        servicesList = Redux.useSelector(getServicesList);

    React.useEffect(()=>{
        dispatch(fetchServiceListRequest());
    },[dispatch]);

    React.useEffect(() => {
        setServices({...services, serviceList: servicesList});
    },[dispatch, servicesList]);

    const repeatRequest = () => {
        dispatch(fetchServiceListRequest());
    };

    return (
        <>
            <ul>
                {services.serviceList.map(service => (
                    <li key={service.id}><Link to={{
                        pathname: `/${service.id}/details`,
                        state: {id: service.id}
                    }}>{service.name}: {service.price}</Link></li>
                ))}
            </ul>
            <Loader isLoading={isLoading}/>
            <ErrorMessage error={error} clickHandler={repeatRequest}/>
        </>
    );
};
export default ServicesList;