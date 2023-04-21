import Header from "./components/header/Header";
import "./App.css";
import SimpleBottomNavigation from "./components/MainNav";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Search from "./pages/search/Search";
import Trending from "./pages/trending/Trending";
import Series from "./pages/series/Series";
import Movies from "./pages/movies/Movies";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route index element={<Trending />} />
            <Route path="/search" element={<Search />} />
            <Route path="/series" element={<Series />} />
            <Route path="/movies" element={<Movies />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
