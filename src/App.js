import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Suggestion from "./components/Suggestion";
import Card from "./components/Card";
import SelectedGames2 from "./components/SelectedGames2";

function App() {
  return (
    <div>
      <Navbar />
      <Suggestion />
      <Card color="dark" hasBorder borderColor="warning" hasShadow hasRadius />
      <SelectedGames2 />
    </div>
  );
}

export default App;
