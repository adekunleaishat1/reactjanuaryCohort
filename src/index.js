import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Landing from './Components/Landing';
import Todo from './Components/Todo';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Notfound from './Components/Notfound';
import Nabar from './Components/Nabar';
import IncreaseCounter from './Components/IncreaseCounter';
import Onetodo from './Components/Onetodo';
import Http from './Components/Http';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Nabar/>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/todo' element={<Todo/>}/>
      <Route path='/one/:id' element={<Onetodo/>}/>
      <Route path='/http' element={<Http/>}/>
      <Route path='*' element={<Notfound/>} />
      <Route path='/home' element={<Home/>}>
        <Route index element={<Landing/>}/>
       <Route  path='/home/landing' element={<Landing/>}/>
       <Route path='/home/count' element={<IncreaseCounter/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
