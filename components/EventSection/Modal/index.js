

import React, {Fragment} from 'react';


import { Button, Dialog, Grid, } from '@mui/material'
import MuiDialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';

const LocationMap = ({ maxWidth, button, buttonClass }) => {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }


    const DialogTitle = ((props) => {
        const { onClose } = props;
        return (
          <MuiDialogTitle>
            {onClose ? (
              <IconButton className='event-close-btn' aria-label="close" onClick={onClose}>
                <i className="ti-close"></i>
              </IconButton>
            ) : null}
          </MuiDialogTitle>
        );
      });


    
}
export default LocationMap


