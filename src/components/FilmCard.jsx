import React from "react";
import { FaHeart } from "react-icons/fa";

const FilmCard = ({ movie }) => {
  const { title, poster_path, release_date, overview } = movie;
  const releaseYear = release_date ? release_date.substring(0, 4) : "";
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div class="bg-transparent p-4 rounded-lg shadow-md mx-auto">
      <img
        src={
          poster_path
            ? `${imageBaseUrl}${poster_path}`
            : "https://via.placeholder.com/300"
        }
        alt={title}
        class="object-contain max-h-96 max-w-full rounded-md"
      />
      <div class="flex flex-row justify-between">
        <div class="pt-3">
          <p class="text-xl font-semibold mb-2 text-white">{title}</p>
          <p class="text-[#B3B3B3] mb-1">{releaseYear}</p>
        </div>
        <button class="text-lg hover:text-[#f35e5e]">
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default FilmCard;
