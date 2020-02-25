import * as React from 'react';
import * as Redux from 'react-redux';
import {
    fetchServiceDetailRequest,
    getServiceDetail,
    getIsLoading,
    getError
} from '../../modules/serviceDetail';
import {IServicesItem} from '../../api';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';

interface IState {
    serviceItem: IServicesItem
}

const ServiceDetail: React.FunctionComponent = (props:any) => {
    let initialState:IState = {serviceItem : {
        id: '',
        name: '',
        price: 0,
        content: ''
    }};

    const [service, setService] = React.useState(initialState);

    const dispatch = Redux.useDispatch();

    const isLoading:boolean = Redux.useSelector(getIsLoading),
        error = Redux.useSelector(getError),
        serviceInfo = Redux.useSelector(getServiceDetail);

    React.useEffect(()=>{
        dispatch(fetchServiceDetailRequest(props.match.params.id));
    },[dispatch]);

    React.useEffect(() => {
        if(serviceInfo!==null) {
            setService({...service, serviceItem: serviceInfo});
        }
    },[dispatch, serviceInfo]);

    const repeatRequest = () => {
        dispatch(fetchServiceDetailRequest(service.serviceItem.id));
    };

    return (
        <>
            <h1>{service.serviceItem.name}</h1>
            {!error && !isLoading && (
                <ul>
                    <li>ID: {service.serviceItem.id}</li>
                    <li>Название: {service.serviceItem.name}</li>
                    <li>Цена: {service.serviceItem.price}</li>
                    <li>Описание: {service.serviceItem.content}</li>
                </ul>
            )}
            <Loader isLoading={isLoading}/>
            <ErrorMessage error={error} clickHandler={repeatRequest}/>
        </>
    );
};
export default ServiceDetail;