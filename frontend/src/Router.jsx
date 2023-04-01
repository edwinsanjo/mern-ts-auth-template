import { Routes, Route, Navigate } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { LoginPage } from "./pages/LoginPage"
import { } from "./pages/RegisterPage"

export const Router = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/*" element={<NotFoundPage />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  )
};