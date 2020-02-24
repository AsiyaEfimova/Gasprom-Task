import React, {FunctionComponent} from 'react';
import { Provider } from 'react-redux';
import createStore from './store';
import ServicesList from './components/ServicesList/index';
import './App.css';

const store = createStore();

function App() {
  return (
      <Provider store={store}>
          <ServicesList />
      </Provider>
  );
}

export default App;



// import Router from './components/Router';
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