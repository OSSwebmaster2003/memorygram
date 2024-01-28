import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import PostDetails from "./pages/PostDetails/PostDetails";
import CreateMemory from "./pages/CreateMemory/CreateMemory";
import Profile from "./pages/Profile/Profile";
import { Box } from "@mui/material";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <BrowserRouter>
      <Navbar />
      <Box component="div" sx={{ padding: "0 50px" }}>
        <Routes>
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" element={<Home setCurrentId={setCurrentId} />} />
          <Route path="/posts/search" element={<Home />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route
            path="/auth"
            element={user ? <Navigate to="/posts" /> : <Auth />}
          />
          <Route path="/:username" element={<Profile user={user} />} />
          <Route
            path="/posts/create"
            element={
              !user ? (
                <Navigate to="/posts" />
              ) : (
                <CreateMemory
                  currentId={currentId}
                  setCurrentId={setCurrentId}
                />
              )
            }
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
