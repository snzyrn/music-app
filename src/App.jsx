import Home from "./pages/Home";
import SeriesPage from "./pages/SeriesPage";
import MoviePage from "./pages/MoviePage";
import Favorites from "./pages/Favorites";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div class="flex min-h-screen  m-0 p-0 bg-[#181818] ">
      <div class="flex-1 flex flex-col">
        <div class="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/series" element={<SeriesPage />} />
            <Route path="/movies" element={<MoviePage />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
