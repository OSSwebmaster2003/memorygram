import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MuiChipsInput } from "mui-chips-input";

import Posts from "../../components/Posts/Posts";
import Form from "../../components/Form/Form";
import Paginate from "../Pagination/Pagination";
import { useDispatch } from "react-redux";
import { getPostsBySearch } from "../../actions/posts";

import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@mui/material";

import { appBar, pagination } from "./styles";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useQuery();

  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
      navigate(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      navigate("/");
    }
  };

  const handleKeyPress = (e) => {
    e.preventDefault();

    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const handleAddChip = (tag) => setTags([...tags, tag]);

  const handleDeleteChip = (chipToDelete) =>
    setTags(tags.filter((tag) => tag !== chipToDelete));

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar sx={appBar} position="static" color="inherit">
              <TextField
                name="search"
                variant="outlined"
                label="Search Memories"
                onKeyUp={handleKeyPress}
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <MuiChipsInput
                sx={{ margin: "10px 0" }}
                value={tags}
                onAddChip={(chip) => handleAddChip(chip)}
                onDeleteChip={(chip) => handleDeleteChip(chip)}
                label="Search Tags"
                variant="outlined"
              />
              <Button onClick={searchPost} color="primary" variant="contained">
                Search
              </Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            {!searchQuery && !tags.length && (
              <Paper sx={pagination} elevation={6}>
                <Paginate page={page} />
              </Paper>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
