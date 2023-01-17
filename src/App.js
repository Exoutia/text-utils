// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  let [mode, setMode] = useState("primary");

  let toggleMode = () => {
    if (mode === 'primary'){
      setMode('dark')
      document.body.style.backgroundColor = "#414141"
      // document.
    }
    else{
      setMode('primary')
      document.body.style.backgroundColor = "white"
    }
  }

  return (
    <div>
      <Navbar title="Text Utils" aboutText="About us" mode={mode} toggleMode={toggleMode} />
      <div className="container">
      <TextForm heading="Enter the text to analyze." mode={mode}/>
      </div>
      {/* <About mode={mode} ></About> */}
    </div>
  );
}

export default App;
