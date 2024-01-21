import React, { useState } from "react";
import { MuiChipsInput } from "mui-chips-input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getPostsBySearch } from "../../actions/posts";

import { AppBar, Button, Grid, TextField } from "@mui/material";

import { searchWrapper, searchButton, searchInput } from "./styles";

const Search = () => {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    <Grid item xs={12}>
      <AppBar sx={searchWrapper} position="static" color="inherit">
        <TextField
          sx={searchInput}
          name="search"
          variant="outlined"
          label="Search Memories"
          onKeyUp={handleKeyPress}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <MuiChipsInput
          sx={searchInput}
          hideClearAll
          value={tags}
          onAddChip={(chip) => handleAddChip(chip)}
          onDeleteChip={(chip) => handleDeleteChip(chip)}
          label="Search Tags"
          variant="outlined"
        />
        <Button
          sx={searchButton}
          onClick={searchPost}
          color="primary"
          variant="contained"
        >
          Search
        </Button>
      </AppBar>
    </Grid>
  );
};

export default Search;
