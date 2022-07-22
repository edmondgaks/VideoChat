import React,{useContext} from 'react'
import { Button } from '@mui/material';
import { SocketContext } from '../SocketContext';
const Notifications = () => {
  const { answerCall,call,callAccepted } = useContext(SocketContext);
  return (
    <div></div>
  )
}

export default Notifications