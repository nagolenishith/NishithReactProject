import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MenuLikes from "./MenuLikes";
import Aboutus from "./Aboutus";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
  <Route path="/" element={<App />} />
  <Route path="/menu" element={<MenuLikes />} />
  <Route path="/about" element={<Aboutus />} /> 
     </Routes>
    </BrowserRouter>
  </React.StrictMode>
);