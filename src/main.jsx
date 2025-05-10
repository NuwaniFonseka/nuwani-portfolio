import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import DonatePath from "./pages/DonatePath";
import ShoppingEye from "./pages/ShoppingEye";
import ZeroWaste from "./pages/ZeroWaste";
import VehicleRental from "./pages/VehicleRental";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projects/donatepath" element={<DonatePath />} />
      <Route path="/projects/shoppingeye" element={<ShoppingEye />} />
      <Route path="/projects/zerowaste" element={<ZeroWaste />} />
      <Route path="/projects/vehiclerental" element={<VehicleRental />} />
    </Routes>
  </BrowserRouter>
);
