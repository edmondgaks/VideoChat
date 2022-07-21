import React from 'react';
import './styles.css';
// import { Typography,AppBar } from '@material-ui/core';
import { Typography,AppBar } from '@mui/material';
import Notifications from './components/Notifications';
import Options from './components/Options';
import VideoPlayer from './components/VideoPlayer';
const App = () => {
  return (
    <div>
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>Video Chat</Typography>
      </AppBar>
      {/* Video player */}
      <VideoPlayer />
      {/* Options -> Notification */}
      <Options>
        <Notifications />
      </Options>
    </div>
  )
}

export default App
