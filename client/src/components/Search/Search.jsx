import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getPostsBySearch } from "../../actions/posts";
import TagsInput from "./TagsInput";

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

  return (
    <div className="grid items-center w-full grid-cols-5 grid-rows-1 gap-4 px-4 py-2 rounded-md bg-mainColor">
      <div className="col-span-2 px-4 rounded-md bg-bgColor">
        <input
          className="w-full h-full py-2 border-none rounded-md shadow-none outline-none bg-inherit text-textColor"
          name="search"
          placeholder="Search by words"
          label="Search Memories"
          onKeyUp={handleKeyPress}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input type="text" className="hidden" />
      </div>
      <div className="col-span-2 col-start-3">
        <TagsInput tags={tags} setTags={setTags} />
      </div>
      <div className="col-start-5">
        <button
          className="flex items-center justify-center w-full h-16 px-10 py-3 text-lg font-semibold border-none rounded-md outline-none cursor-pointer bg-buttonColor text-textColor"
          onClick={searchPost}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
