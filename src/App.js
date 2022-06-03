import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './Component/Signup';
import Signin from './Component/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <div>
     <BrowserRouter>
     <Routes>
       <Route path="/"exact element={<Signup/>}/>
       <Route path="/search"exact element={<Signin/>}/>
    

       </Routes></BrowserRouter>
   </div>
  );
}

export default App;
