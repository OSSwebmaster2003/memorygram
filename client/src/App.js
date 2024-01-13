import { Container, AppBar, Typography, Grow, Grid, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import memoriesImg from "./images/memories.png";

import { getPosts } from "./actions/posts";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import { appBar, heading, image } from "./styles";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar sx={appBar} position="static" color="inherit">
        <Typography sx={heading} variant="h2" align="center">
          Memories
        </Typography>
        <Box
          sx={image}
          component="img"
          src={memoriesImg}
          alt="memories"
          height={60}
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} md={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
