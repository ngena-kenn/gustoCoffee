import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Divider } from '@mui/material';

const ViewProduct = (props) => {
  console.log("open ", props.products);
  const cmdPresent = props?.products?.length > 0
  let total = 0
  const produits = props.products?.map((value, index) => {
  total += parseFloat(value?.price) 
  return (<div key={index}>
    <div tyle={{display: 'flex', flexDirection: 'column'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', padding: 5}}>
        <p>{value?.product}</p>
        <p>{value?.price}</p>
      </div>
      <Divider variant='fullWidth'/>
    </div>
  </div>)
  } 
  )
  return (
    <div>
      <Dialog
        // style={{height: '500px', backgroundColor: 'green', right: '-32px'}}
        open={props.viewProduct}
        onClose={() => {
          props.setViewProduct((prev) => !prev)
         }}
      >
        <DialogTitle color='green'>Liste des produits commandés</DialogTitle>
        <DialogContent style={{ height: '300px', width: '500px', paddingTop: 15 }}>
          <DialogContentText>
          </DialogContentText>
            <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              {cmdPresent ? produits : 
             <div style={{fontSize: 30, textAlign: 'center'}}>
              Vous n'avez pas encore fait de commandes
             </div>  }
            </div>
        </DialogContent>
            <div style={{display: 'flex', padding: '5px 25px', justifyContent: 'space-between'}}>
              <p>Total</p>
              <p>{total.toFixed(2)} €</p>
            </div>
        <DialogActions>
          <Button variant='outlined' color='success' disabled={!cmdPresent} onClick={() => {
            props.confirmCommande()
            props.setViewProduct((prev) => !prev)
          }}>Confirmer</Button>
          <Button variant='outlined' color='success' disabled={!cmdPresent} onClick={() => {
            props.cancelCommande() 
            window.location.reload();
          }}>Annuler</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ViewProduct
