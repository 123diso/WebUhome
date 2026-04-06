import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../component/Footer";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Housinglist from "../components/HousingList";
import Favorites from "../pages/Favorites";
import { useState } from "react";
import "../styles/start.css";

function Start() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Housinglist
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />
        <Route
          path="housing"
          element={
            <Housinglist
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />
        <Route path="favorites" element={<Favorites favorites={favorites} />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>

      <Footer />
    </>
  );
}

export default Start;
