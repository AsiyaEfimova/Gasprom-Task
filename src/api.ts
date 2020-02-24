import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:7070/api';

export interface IServicesList {
    id: string,
    name: string,
    price: number
}
export interface IServicesItem {
    id: string,
    name: string,
    price: number,
    content: string
}

export const fetchList = ():Promise<IServicesList[]> => axios.get('/services', { 'headers': {'Content-Type': 'application/json'}}).then(response => response.data);

export const fetchItem = (id:string):Promise<IServicesItem> => axios.get(`/services/${id}`, { 'headers': {'Content-Type': 'application/json'}}).then(response => response.data);