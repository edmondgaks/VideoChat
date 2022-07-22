import React, { useContext } from 'react'
import { Grid,Typography,Paper} from '@mui/material';
// import { makeStyles } from '@material-ui/styles';
import './style.css';

import { SocketContext } from '../SocketContext';
const VideoPlayer = () => {
  const {name,callAccepted,myVideo,userVideo,callEnded,stream,call} = useContext(SocketContext);
  return (
    <Grid container className="gridContainer">
      {
        stream && (
          <Paper className="paper">
            <Grid item xs={12} md={6}>
              <Typography variant='h2' gutterBottom>{name || 'name'}</Typography>
              <video playsInline muted ref={myVideo} autoPlay className="video" />
            </Grid>
          </Paper>
        )
      }
      {
        callAccepted && !callEnded && (
          <Paper>
            <Grid item xs={12} md={6}>
              <Typography variant='h2' gutterBottom>{call.name || 'name'}</Typography>
              <video playsInline ref={userVideo} autoPlay />
            </Grid>
          </Paper>
        )
      }
    </Grid>
  )
}

export default VideoPlayer