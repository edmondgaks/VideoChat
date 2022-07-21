import React from 'react';
import './styles.css';
import { Typography,AppBar } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import Notifications from './components/Notifications';
import Options from './components/Options';
import VideoPlayer from './components/VideoPlayer';
// const useStyles = makeStyles((theme) => ({
//   appBar: {
//    borderRadius: 15,
//    margin: '30px 100px',
//    display: 'flex',
//    flexDirection: 'row',
//    justifyContent: 'center',
//    alignItems: 'center',
//    width: '600px',
//    border: '2px solid black',
//    [theme.breakpoints.down('xs')] : {
//      width: '90%',
//    },
//   },
//   wrapper: {
//    display: 'flex',
//    flexDirection: 'column',
//    alignItems: 'center',
//    width: '100%'
//   },
// }));

const App = () => {
  // const classes = useStyles();
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
