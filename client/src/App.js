import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import memoriesImg from "./images/memories.png";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import { appBar, heading, image } from "./styles";

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar sx={appBar} position="static" color="inherit">
        <Typography sx={heading} variant="h2" align="center">
          Memories
        </Typography>
        <img sx={image} src={memoriesImg} alt="memories" height={60} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
