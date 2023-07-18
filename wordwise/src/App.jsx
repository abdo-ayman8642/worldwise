import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Homepage, Product, Pricing, Pagenotfound } from "./pages/utils";
import Navbar from "./components/navbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
