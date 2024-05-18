import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

const FilmCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { title, name, poster_path, release_date, first_air_date } = movie;
  const displayTitle = title || name;
  const releaseYear = release_date
    ? release_date.substring(0, 4)
    : first_air_date
    ? first_air_date.substring(0, 4)
    : "";
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFav = favorites.some((fav) => fav.id === movie.id);
    setIsFavorite(isFav);
  }, [movie.id]);

  const handleFavoriteToggle = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
    } else {
      updatedFavorites = [...favorites, movie];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-transparent p-4 rounded-lg w-52 shadow-md mx-auto mt-3">
      <img
        src={
          poster_path
            ? `${imageBaseUrl}${poster_path}`
            : "https://via.placeholder.com/300"
        }
        alt={displayTitle}
        className="object-contain sm:max-h-96 h-60 max-w-full rounded-md"
      />
      <div className="flex flex-row justify-between">
        <div className="pt-3">
          <p className="text-xl font-semibold mb-2 text-white">
            {displayTitle}
          </p>
          <p className="text-[#B3B3B3] mb-1">{releaseYear}</p>
        </div>
        <button
          className={`text-lg hover:text-[#f35e5e] ${
            isFavorite ? "text-red-500" : ""
          }`}
          onClick={handleFavoriteToggle}
        >
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default FilmCard;
