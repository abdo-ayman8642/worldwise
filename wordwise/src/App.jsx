import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Homepage,
  Product,
  Pricing,
  Pagenotfound,
  Login,
  AppLayout,
} from "./pages/utils";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<p>List of countries</p>} />
            <Route path="cities" />
            <Route path="countries" />
          </Route>
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
