import * as React from 'react';
import * as Redux from 'react-redux';
import {
    fetchServiceListRequest,
    getServicesList,
    getIsLoading,
    getError
} from '../../modules/servicesList';
import {IServicesItem} from '../../api';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';

interface IState {
    serviceItem: IServicesItem[]
}

const ServiceDetail: React.FunctionComponent = () => {
    let initialState:IState = {serviceItem : []};

    // const [services, setServices] = React.useState(initialState);
    //
    // const dispatch = Redux.useDispatch();
    //
    // const isLoading:boolean = Redux.useSelector(getIsLoading),
    //     error = Redux.useSelector(getError),
    //     servicesList = Redux.useSelector(getServicesList);
    //
    // React.useEffect(()=>{
    //     dispatch(fetchServiceListRequest());
    // },[dispatch]);
    //
    // React.useEffect(() => {
    //     setServices({...services, serviceItem: servicesList});
    // },[dispatch, servicesList]);
    //
    // const repeatRequest = () => {
    //     dispatch(fetchServiceListRequest());
    // };

    return (
        <>
            <div>Детальная страница</div>
            {/*<Loader isLoading={isLoading}/>*/}
            {/*<ErrorMessage error={error} clickHandler={repeatRequest}/>*/}
        </>
    );
};
export default ServiceDetail;