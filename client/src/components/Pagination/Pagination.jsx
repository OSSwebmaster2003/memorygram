import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Pagination, PaginationItem } from "@mui/material";

import { getPosts } from "../../actions/posts";

import { paginationWrapper } from "./styles";

const Paginate = ({ page }) => {
  const { numberOfPages } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (page) {
      dispatch(getPosts(page));
    }
  }, [dispatch, page]);

  return (
    <Pagination
      sx={paginationWrapper}
      style={{ color: "white" }}
      count={numberOfPages}
      page={Number(page) || 1}
      variant="standard"
      shape="rounded"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/posts?page=${item.page}`}
          style={{ color: "white" }}
        />
      )}
    />
  );
};

export default Paginate;
