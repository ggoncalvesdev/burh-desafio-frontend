import { Route, Routes } from "react-router";
import { Home } from "../pages/Home";
import { Register } from "../pages/Register";

export const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Visializar" element={<Home />} />
      </Routes>
  );
};
