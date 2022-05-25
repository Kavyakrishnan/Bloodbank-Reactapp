import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './Component/Signup';
import Signin from './Component/Signin';

function App() {
  return (
   <div>
     <Signup/>
     <Signin/>
   </div>
  );
}

export default App;
