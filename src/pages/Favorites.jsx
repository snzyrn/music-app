import React from "react";
import Header from "../components/Header";
import FilmCard from "../components/FilmCard";
import { FaHeartCrack } from "react-icons/fa6";

const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-8 p-4 px-22">
        <h2 className="text-white pl-8 text-2xl pb-4">Your Favorites</h2>
        {favorites.length === 0 ? (
          <div className="text-white text-xl flex justify-center align-center m-10 mt-20">
            <FaHeartCrack className="text-2xl mx-3" />
            You have no favorites
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {favorites.map((favorite) => (
              <FilmCard key={favorite.id} movie={favorite} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
