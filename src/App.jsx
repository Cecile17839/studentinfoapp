import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import Home from "./pages/Home";
import Students from "./pages/Students";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
