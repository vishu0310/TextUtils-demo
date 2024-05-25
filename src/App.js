import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'; 
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Has been Enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      setInterval(() => {
        document.title = 'TextUtils is amazing';
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtils Now';
      }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has been Enabled", "success");
    }
  }

  return (
    <>
    {/* Always use exact path for exact url matching otherwise react do partial matching
    /users ==> comp1
    /users/home ==> comp2   but it will give comp 1 coz partial matching */}
      <Router>
        <Navbar title="TextUtils1" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route  exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
