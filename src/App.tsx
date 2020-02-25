import React, {FunctionComponent} from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import SiteRouter from './components/Router';
import createStore from './store';
import './App.css';

const store = createStore();

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <SiteRouter />
            </Provider>
        </BrowserRouter>
    );
}

export default App;



//
// import { BrowserRouter } from 'react-router-dom';

//
// class App extends Component {
//     render() {
//         return (
//             <BrowserRouter>
//                 <Provider store={store}>
//                     <Router />
//                 </Provider>
//             </BrowserRouter>
//         );
//     }
// }