import AppHeader from "./components/AppHeader";
import NewList from "./components/NewList";

// import SimpleExample from "./components/SimpleExample";
import V2Example from "./components/V2Example";

import React from "react";

function App() {
  return (
    <div className="App">
      <AppHeader>Checklit</AppHeader>
      <NewList />
      <div style={{ height: "100vh" }}>
        {/* <SimpleExample /> */}
        <V2Example />
      </div>
    </div>
  );
}

export default App;
