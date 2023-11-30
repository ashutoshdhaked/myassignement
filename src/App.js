import {Provider} from 'react-redux';
import Home from './Home';
import  {store} from './Store';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import ShowAll from './showAll';
import CreateNew from './CreateNew';
function App() {
  return (
    <>
     <Provider store={store}>
      <BrowserRouter>
      <Routes>
             <Route  path='/' element={<Home/>}>
            <Route index  element={<ShowAll/>}></Route>
            <Route path='create' element={<CreateNew/>}></Route>
            </Route>
          </Routes>
      </BrowserRouter>
    </Provider>
    
    </>
  );
}

export default App;
