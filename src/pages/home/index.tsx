import { Box, Container, Grid } from "@mui/material";
import React from 'react';
import LandingPageCard from "../../components/cards/LandingPageCard";
import { data } from '../../fack-data';
const HomePage = () => {
  return (
    <Box py={5}>
      <Container maxWidth="xl">
        <Grid container spacing={2} justifyContent={'center'}>
          {data.map((item) =>
            <Grid key={item.id} item xs={6} sm={4} md={3}>
              <LandingPageCard item={item} />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  )
}

export default HomePage
