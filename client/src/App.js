// import { Fragment } from "react";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Home2 from "./components/components2";
import { Routes, Route } from "react-router-dom";

import Search from "./pages/Search";
import { Fragment } from "react";

import NotFound from "./pages/notFound";
import Playlistdetail from "./pages/Playlist_detail";
import { AuthProvider } from "./contexts/AuthContext";
// import Playlists from "./components/Playlists";

const App = () => {
  return (
    <Fragment>
      <AuthProvider>
        <Routes>
          <Route>
            <Route path="/" index element={<Home />} />

            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />

            <Route path="/Home" element={<Home2 />} />

            <Route path="/search" element={<Search />} />

            <Route path="/playlist/:id" element={<Playlistdetail />} />

            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Fragment>
  );
};

export default App;
