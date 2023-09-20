import { AppBar, Box, Container, Divider, Stack, Typography, styled } from '@mui/material';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthMenu from './AuthMenu';

const Header = () => {
  return (
    <AppBar position="static" sx={{ boxShadow: 0 }}>
      <Container maxWidth="xl" >
        <Stack spacing={2} justifyContent={'space-between'} alignItems={'center'} direction={'row'} py={1.6}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to='/'>Logo</NavLink>
          </Typography>
          <Box>
            {false ? <AuthMenu /> : <Stack
              alignItems={'center'}
              direction="row"
              divider={<Divider orientation="vertical" flexItem sx={{ borderColor: '#fff', alignSelf: 'auto', height: '15px' }} />}
              spacing={1}
            >
              <LinkStyle to={'/login'}>Login</LinkStyle>
              <LinkStyle to={'/signup'}>Signup</LinkStyle>
            </Stack>}
          </Box>
        </Stack>
      </Container>
    </AppBar>
  )
}
export default Header

const LinkStyle = styled(Link)(() => ({
  fontSize: '14px',
  fontWeight: '300'
}))