import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Suggestion from "./components/Suggestion";
import Card from "./components/Card";
import Counter from "./components/Counter"

function App() {
  return (
    <div>
      <Navbar />
      <Suggestion />
      <Card color="dark" hasBorder borderColor="warning" hasShadow hasRadius />
      <Counter />
    </div>
  );
}

export default App;
