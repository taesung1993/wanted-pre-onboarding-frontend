import React from "react";
import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Routers from "./components/Routers";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <RouterProvider router={Routers} />
    </div>
  );
}

export default App;
