import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import LocomotiveScroll from "locomotive-scroll";
import HOC from "./components/ui/hoc";

function App() {
  new LocomotiveScroll();
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
      </Routes>
    </>
  );
}

export default App;
