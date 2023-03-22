import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Alert, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const AlertComponent = () => {
  const {error, setError} = useContext(AppContext);

  return (
    <div className='absolute inset-x-0 top-[90px] md:top-[120px]'>
      <Collapse in={error}>
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="error"
                size="small"
                onClick={() => {
                  setError(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2, maxWidth: '1024px', margin: '0 auto' }}
          >
            Aqui zero vai ser o mínimo...
          </Alert>
      </Collapse>
    </div>
  )
}

export default AlertComponent;