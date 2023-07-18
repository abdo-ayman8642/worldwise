import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Homepage, Product, Pricing, Pagenotfound, Login } from "./pages/utils";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
