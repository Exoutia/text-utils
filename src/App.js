// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';

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
      <Navbar title="Text Utils" aboutText="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze." mode={mode}/>
      </div>
      {/* <About mode={mode} ></About> */}
    </div>
  );
}

export default App;
