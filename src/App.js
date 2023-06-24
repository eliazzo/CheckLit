import React from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
// import ListContainer from './components/ListContainer';
import ViewForm from "./components/ViewForm";

function App() {
  return (
    <div className="App">
      <AppHeader>Checklit</AppHeader>
      <ViewForm />
      {/* <ListContainer/> */}
    </div>
  );
}

export default App;
