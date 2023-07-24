import React from "react";
import Top from "./screens/Top";
import NavBar from "./components/NavBar";
import Quiz from "./screens/Quiz";
import { BrowserRouter ,Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path = "/" element={<Top />} />
          <Route path = "/quiz" element={<Quiz />} />
          <Route render = { () => <h4>not found...</h4>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
