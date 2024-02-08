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
      <div className="static flex items-center justify-between w-full gap-6 px-4 py-2 border-2 rounded-md bg-inherit border-textColor">
        <input
          className="py-2 pl-3 border-none shadow-none outline-none bg-mainColor text-textColor"
          style={{ width: "calc((100% - 184px)/2)" }}
          name="search"
          placeholder="Search by words"
          label="Search Memories"
          onKeyUp={handleKeyPress}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <MuiChipsInput
          style={{ width: "calc((100% - 184px)/2)" }}
          hideClearAll
          value={tags}
          onAddChip={(chip) => handleAddChip(chip)}
          onDeleteChip={(chip) => handleDeleteChip(chip)}
          label="Search Tags"
        />
        <button
          className="flex items-center justify-center w-40 h-16 px-10 py-3 text-lg font-semibold border-none rounded-md outline-none cursor-pointer bg-buttonColor text-textColor"
          onClick={searchPost}
        >
          Search
        </button>
      </div>
    </Grid>
  );
};

export default Search;
