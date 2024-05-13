import Sidebar from "./components/Sidebar";
import Discover from "./pages/Discover";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div class="flex min-h-screen bg-gradient-to-br from-[#C8D5BB] to-[#47585C] m-0 p-0">
      <Sidebar />
      <div class="flex-1 flex flex-col">
        <div class="flex-1">
          <Routes>
            <Route path="/" element={<Discover />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
