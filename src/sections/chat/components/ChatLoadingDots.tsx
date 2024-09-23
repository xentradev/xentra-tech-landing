import { useTheme } from '@mui/material';
import React from 'react';
import SyncLoader from "react-spinners/SyncLoader";

const ChatLoadingDots = () => {
    const theme = useTheme()
  return (
    <SyncLoader color={theme.palette.primary.main} size={12} speedMultiplier={0.5} />
  )
}

export default ChatLoadingDots;