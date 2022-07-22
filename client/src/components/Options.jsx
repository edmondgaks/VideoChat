import React, { useContext,useState } from 'react'
import { Button,TextField,Grid,Typography,Container,Paper } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment,Phone,PhoneDisabled } from '@mui/icons-material';
import { SocketContext } from '../SocketContext';
import './style.css';


const Options = ({children}) => {
  const {me,name,setName,callAccepted,callEnded,leaveCall,callUser} = useContext(SocketContext);
  const [idToCall,setIdToCall] = useState('');
  return (
    <Container className="container">
      <Paper elevation={10}  className="paper2">
        <form className="root" noValidate autoComplete="off">
          <Grid container className="grid-cont">
            <Grid item xs={12} md={6} className="padding">
              <Typography variant="h6" gutterBottom>Account Info</Typography>
              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <CopyToClipboard text={me} className="margin">
                <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>Copy your Id</Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6} className="padding">
              <Typography variant="h6" gutterBottom>Make a call</Typography>
              <TextField label="Name" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall} className="margin">Hang up</Button>
              ) : (
                <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} className="margin"></Button>
              )}
            </Grid>
          </Grid>
        </form>
      {children}
      </Paper>
      </Container>
  )
}

export default Options