import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { Box, Button, Container, Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import LeftSide from '../../components/details/LeftSide'
import Middle from '../../components/details/Middle'
import RightSide from '../../components/details/RightSide'
import PageWrapper from './PageWrapper'
const DetailsPage = () => {

  return (
    <Box>
      <Container maxWidth="xl">
        <Link to='/'><Button sx={{ my: '12px' }} variant="contained" startIcon={<ChevronLeftIcon />}>Back</Button></Link>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={3}>
            <PageWrapper>
              <LeftSide />
            </PageWrapper>
          </Grid>
          <Grid item xs={12} lg={6}>
            <PageWrapper>
              <Middle />
            </PageWrapper>
          </Grid>
          <Grid item xs={12} lg={3}>
            <PageWrapper>
              <RightSide />
            </PageWrapper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default DetailsPage

