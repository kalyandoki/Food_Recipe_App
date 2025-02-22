import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Details from "./pages/Details";

function App() {
  return (
    <>
      <div className="text-3xl font-semibold">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
