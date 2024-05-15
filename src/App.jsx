import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div class="flex min-h-screen bg-gradient-to-br from-[#404040] to-[#181818] m-0 p-0">
      <div class="flex-1 flex flex-col">
        <div class="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
