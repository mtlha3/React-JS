import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark Mode has been Enabled!', "success");
      document.title = 'Texutil - Dark Mode';
      setInterval(() => {
        document.title = 'TextUtils - Amazing Theme';
      }, 2000);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been Enabled!', "success");
      document.title = 'Texutil - Light Mode';
      setInterval(() => {
        document.title = 'TextUtils - Install Now';
      }, 2000);
    }
  };

  return (
    <>
      <Router>
        <Navbar title="ReactWebsite" mode={mode} toggleMode={toggleMode} about="About" />
        <h1>Click on HOME to proceed</h1>
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/TextForm" element={<TextForm showAlert={showAlert} heading="Type your text here" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
