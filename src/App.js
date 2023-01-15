// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  let myBodyStyle = {
    color: "white",
    backgroundColor: "#212529",
  }
  return (
    <div style={myBodyStyle}>
      <Navbar title="Text Utils" aboutText="About us" />
      <div className="container">
      <TextForm heading="Enter the text to analyze." />
      </div>
      <About></About>
    </div>
  );
}

export default App;
