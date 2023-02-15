import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const FormDialog = ({open, setOpen, text, title,}) => {

  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)} >
        <DialogTitle>{title} </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {text}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Adress"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Retour</Button>
          <Button onClick={() => setOpen(prev => !prev)}>Continuer</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;