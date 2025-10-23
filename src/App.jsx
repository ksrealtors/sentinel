import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import HOC from "./components/ui/hoc";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HOC>
              <Home />
            </HOC>
          }
        />
        <Route
          path="/contact"
          element={
            <HOC>
              <Contact />
            </HOC>
          }
        />
      </Routes>
    </>
  );
}

export default App;
