import React from "react";
import { RouterProvider } from "react-router-dom";
import Routers from "./components/Routers";

function App() {
  return (
    <div className="App">
      <RouterProvider router={Routers} />
    </div>
  );
}

export default App;
