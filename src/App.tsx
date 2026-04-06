import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Start from "./pages/Start";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Profile from "./pages/Profile";
import PropertyDetail from "./pages/PropertyDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/start/*" element={<Start />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/property/:id" element={<PropertyDetail />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
