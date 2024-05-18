import React, { useState, useRef } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const FilmSlider = ({ movies }) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
  const sliderRef = useRef(null);
  const [defaultTransform, setDefaultTransform] = useState(0);
  const slideWidth = 398; // Adjust this value according to your needs

  const goNext = () => {
    const slider = sliderRef.current;
    const newTransform = defaultTransform - slideWidth;
    if (Math.abs(newTransform) >= slider.scrollWidth / 1.7)
      setDefaultTransform(0);
    else setDefaultTransform(newTransform);
  };

  const goPrev = () => {
    const slider = sliderRef.current;
    const newTransform = defaultTransform + slideWidth;
    if (Math.abs(newTransform) <= slider.scrollWidth) setDefaultTransform(0);
    else setDefaultTransform(newTransform);
  };

  return (
    <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
      <div className="w-full relative flex items-center justify-center">
        <button
          aria-label="slide backward"
          className="absolute z-30 left-0 ml-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer text-white text-3xl"
          onClick={goPrev}
        >
          <MdKeyboardArrowLeft />
        </button>
        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
          <div
            ref={sliderRef}
            className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
            style={{ transform: `translateX(${defaultTransform}px)` }}
          >
            {movies.map((movie, index) => (
              <div
                key={index}
                className="flex flex-shrink-0 relative w-full sm:w-auto"
              >
                <img
                  src={
                    movie.poster_path
                      ? `${imageBaseUrl}${movie.poster_path}`
                      : "https://placehold.co/600x400"
                  }
                  className="h-64 rounded-md"
                  alt={movie.title}
                />
                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
              </div>
            ))}
          </div>
        </div>
        <button
          aria-label="slide forward"
          className="absolute z-30 right-0 mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 text-white text-3xl"
          onClick={goNext}
        >
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default FilmSlider;
