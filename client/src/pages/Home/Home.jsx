import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Posts from "../../components/Posts/Posts";

import { Grow } from "@mui/material";

import Paginate from "../../components/Pagination/Pagination";
import Search from "../../components/Search/Search.jsx";
import { useSelector } from "react-redux";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = ({ setCurrentId }) => {
  const { posts } = useSelector((state) => state.posts);

  const [tags, setTags] = useState([]);
  const query = useQuery();

  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  return (
    <Grow in>
      <div>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <Search />
          </div>
          <div>
            <div className="grid">
              <Posts setCurrentId={setCurrentId} />
            </div>
          </div>
          <div>{!searchQuery && !tags.length && <Paginate page={page} />}</div>
        </div>
      </div>
    </Grow>
  );
};

export default Home;
