import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Suggestion from './Suggestion';
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Navbar />
      <Suggestion />
    </div>

  )
}

export default App;
