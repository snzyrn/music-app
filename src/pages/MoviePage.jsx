import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../actions/movieActions";
import Header from "../components/Header";
import FilmCard from "../components/FilmCard";

const Home = ({ movies, fetchMovies }) => {
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div>
      <Header />
      <div class="container mx-auto mt-8 p-4 px-22">
        <h2 class="text-white pl-8 text-2xl pb-4">Explore Movies</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {movies.map((movie) => (
            <FilmCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, { fetchMovies })(Home);
