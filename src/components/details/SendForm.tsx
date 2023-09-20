import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import React from 'react';
const SendForm = () => {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%", position: 'absolute', bottom: '0' }}
    >
      <InputBase
        sx={{ ml: 1, width: '100%' }}
        placeholder="Search a message"
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SendIcon />
      </IconButton>
    </Paper>
  )
}

export default SendForm
