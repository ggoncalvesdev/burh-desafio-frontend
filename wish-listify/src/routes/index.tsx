import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
