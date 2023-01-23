// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

import { BrowserRouter as Router,
        Route,
        Routes
} from 'react-router-dom';


function App() {
  let [mode, setMode] = useState("primary");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  }

  let toggleMode = () => {
    if (mode === 'primary'){
      setMode('dark')
      document.body.style.backgroundColor = "#414141"
      showAlert("Dark Mode Enabled", "success")
    }
    else{
      setMode('primary')
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode Enabled", "success")

    }
  }

  return (
    <div>
      <Router>
        <Navbar title="Text Utils" aboutText="About us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container">
        <Routes>
          <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze." mode={mode}/>} ></Route>
          <Route path='/about' element={<About></About>} ></Route>
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
