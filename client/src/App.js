import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import PostDetails from "./pages/PostDetails/PostDetails";
import CreateMemory from "./pages/CreateMemory/CreateMemory";
import Profile from "./pages/Profile/Profile";
import { Box } from "@mui/material";
import Settings from "./pages/Settings/Settings";
import OwnPosts from "./pages/OwnPosts/OwnPosts";
import LikedPosts from "./pages/LikedPosts/LikedPosts";

const App = () => {
  const [currentId, setCurrentId] = useState(null);

  return (
    <BrowserRouter>
      <Navbar />
      <Box component="div" sx={{ padding: "0 50px" }}>
        <Routes>
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" element={<Home setCurrentId={setCurrentId} />} />
          <Route path="/posts/search" element={<Home />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/:username/settings" element={<Settings />} />
          <Route path="/:username/posts" element={<OwnPosts />} />
          <Route path="/:username/likes" element={<LikedPosts />} />
          <Route
            path="/posts/create"
            element={
              <CreateMemory currentId={currentId} setCurrentId={setCurrentId} />
            }
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
