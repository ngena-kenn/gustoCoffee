import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';

const FormDialog = ({open, setOpen, text, title, cancelCommande}) => {
  const navigate = useNavigate()
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
          <Button onClick={() => {
            setOpen(prev => !prev)
            cancelCommande()
            navigate('/home')
          }}>Continuer</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;