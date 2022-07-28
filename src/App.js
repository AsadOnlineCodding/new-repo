import './App.css';
import React,{useState}  from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import NoteState from './context/notes/NoteState';
import Alert from './Components/Alert';
import GeneralInfo from './Components/GeneralInfo';
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 2000);
}

  return (
    <>
      
 
    <NoteState>
      <Router>
    <Navbar showAlert={showAlert}/>
    <Alert alert={alert}/>
    <div >
        <Routes>
          <Route exact path="/" element={<GeneralInfo  showAlert={showAlert} />}/>
          <Route exact path="/yournotes" element={<Home  showAlert={showAlert} />}/>
          <Route exact path="/about" element={<About showAlert={showAlert}/>}/>
          <Route exact path="/login" element={<Login showAlert ={showAlert}/>}/>
          <Route exact path="/signup" element={<Signup showAlert ={showAlert}/>}/>
        </Routes>
        </div>
      </Router>
      </NoteState>
    </>
  );
}
export default App;