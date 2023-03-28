import React from 'react';
import Alert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export function useSnackBar(
  message: string,
  severity: AlertProps['severity'] = 'info',
  duration: number,
  onClose?: () => void,
) {
  return (
    <Snackbar open={true} autoHideDuration={duration} onClose={onClose}>
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  );
}
