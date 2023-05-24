import { Route, Routes } from "react-router";
import { Home } from "../pages/Home";
import { Register } from "../pages/Forms/register";
import { Login } from "../pages/Forms/login";

export const Router = () => {
  const storedEmail = localStorage.getItem("email");
  if (storedEmail !== null) {
    return (
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Visializar" element={<Home />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    );
  }
};
