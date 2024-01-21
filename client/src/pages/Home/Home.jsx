import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Posts from "../../components/Posts/Posts";

import { Grow, Grid, Paper, Box } from "@mui/material";

import Paginate from "../../components/Pagination/Pagination";
import Search from "../../components/Search/Search.jsx";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = ({ setCurrentId }) => {
  const [tags, setTags] = useState([]);
  const query = useQuery();

  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  return (
    <Grow in>
      <Box>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Search />
          <Grid item xs={12}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12}>
            {!searchQuery && !tags.length && <Paginate page={page} />}
          </Grid>
        </Grid>
      </Box>
    </Grow>
  );
};

export default Home;
