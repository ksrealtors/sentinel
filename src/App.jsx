import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { Navbar } from "./components/ui/navbar";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  new LocomotiveScroll();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
