import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page/home";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
