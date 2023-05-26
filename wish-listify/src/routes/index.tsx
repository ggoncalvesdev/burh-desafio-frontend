import { Route, Routes } from "react-router";
import { Home } from "../pages/Home";
import { Register } from "../pages/Forms/register";
import { Login } from "../pages/Forms/login";
import { Create } from "../pages/Create";

export const Router = () => {
  const storedEmail = localStorage.getItem("email");
  if (storedEmail !== null) {
    return (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/visializar" element={<Home />} />
        <Route path="/criar" element={<Create />} />
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
