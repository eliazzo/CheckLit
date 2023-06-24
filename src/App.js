import React from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import ViewForm from "./components/ViewForm";

function App() {
  return (
    <div className="App">
      <AppHeader>Checklit</AppHeader>
      <ViewForm />
    </div>
  );
}

export default App;
