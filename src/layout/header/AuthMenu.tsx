import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
const AuthMenu = () => {
  const settings = [
    {
      id: 1,
      urlName: 'Login',
      url: '/login'
    },
    {
      id: 1,
      urlName: 'Singup',
      url: '/singup'
    },
  ];
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Ridoy" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
            <Link to={setting.url} >{setting.urlName}</Link>
          </MenuItem>
        ))}
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography>Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default AuthMenu
