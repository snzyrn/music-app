import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../actions/movieActions";
import { fetchRecommendation } from "../actions/recommendationActions";
import { fetchSeries } from "../actions/serieActions";
import Header from "../components/Header";
import FilmSlider from "../components/FilmSlider";
import backgroundImage from "../assets/background-image.jpeg";

const Home = ({
  movies,
  recommendation,
  series,
  fetchSeries,
  fetchMovies,
  fetchRecommendation,
}) => {
  useEffect(() => {
    fetchMovies();
    fetchRecommendation();
    fetchSeries();
  }, [fetchMovies, fetchRecommendation, fetchSeries]);

  return (
    <div>
      <div className="relative w-full ">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#181818] from-40% pointer-events-none"></div>
        <Header />
        <div className="w-full bg-hero-image bg-cover px-10 pb-20 flex justify-center">
          <p class="text-white font-medium text-3xl  p-24">
            Welcome to Kinoverse!
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <div className="">
          <h2 className="text-white pl-8 text-2xl">Recommendations</h2>
          <FilmSlider movies={recommendation} />
        </div>
        <div className="">
          <h2 className="text-white pl-8 text-2xl">Movies</h2>
          <FilmSlider movies={movies} />
        </div>
        <div className="">
          <h2 className="text-white pl-8 text-2xl">TV Shows</h2>
          <FilmSlider movies={series} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  recommendation: state.recommendation.recommendation,
  series: state.series.series,
});

const mapDispatchToProps = {
  fetchMovies,
  fetchRecommendation,
  fetchSeries,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
