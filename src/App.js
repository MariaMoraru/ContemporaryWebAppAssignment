import logo from './logo.svg';
import './App.css';
import LogIn from './Components/LogIn';
import Register from './Components/Register';
import Picture from './Components/Picture';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
      <div>  
        <LogIn/> 
        <Register/>
      </div>
  );
}

export default App;
