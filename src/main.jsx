import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.scss";
import App from "./App.jsx";
import Header from "./component/header";
import Flex from "./pages/flex";
import Grid from "./pages/grid";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/flex" element={<Flex />} />
        <Route path="/grid" element={<Grid />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
