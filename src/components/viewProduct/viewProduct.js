import { useState }from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Divider } from '@mui/material';
import StripeContainer from '../payment/stripcontainer';
import '../../css/payment.scss';
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { DateRange } from "react-date-range";


const ViewProduct = (props) => {
  const [showItem, setShowItem] = useState(false);
  console.log("open ", props.products);
  const cmdPresent = props?.products?.length > 0
  const [openDate, setOpenDate] = useState(true);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
    
    const start = dates[0].startDate;
    const end = dates[0].endDate;
    const resultTime = end - start ;
    const resultDays = resultTime / (1000 * 3600 * 24) + 1;
  
  let total = 0

  const produits = props.products?.map((value, index) => {
  total += parseFloat(value?.price) * resultDays
  return (<div key={index} >
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
    <>
    {showItem ? (
      <Dialog
      open={props.viewProduct}
      onClose={() => {
        props.setViewProduct((prev) => !prev)
       }} style={{ height: '300px', width: '500rem !important', paddingTop: 15 }}
    >
				<StripeContainer prop1={total *100} prop2={dates}/>
        </Dialog>
			) :(
    <div>
      <Dialog
        //style={{min-height: 'calc(100% - 4rem)', max-height:'1px !important' margin-top:"15rem"}}
        open={props.viewProduct}
        className="dialog"
        onClose={() => {
          props.setViewProduct((prev) => !prev)
         }}
      >
        <DialogTitle color='green'>Liste des produits commandés</DialogTitle>
        <DialogContent style={{ height: '300px', width: '500px', paddingTop: 15}}>
          <DialogContentText>
          </DialogContentText>
            <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              {cmdPresent ? produits : 
             <div style={{fontSize: 30, textAlign: 'center'}}>
              Vous n'avez pas encore fait de commandes
             </div>  }
            </div>
        </DialogContent>
        <div className="headerSearchItem" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
        <span
          onClick={() => setOpenDate(!openDate)}
          className="headerSearchText"
        >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
          dates[0].endDate,
          "MM/dd/yyyy"
        )}`}</span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDates([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dates}
            className="date"
            minDate={new Date()}
          />
        )}
      </div>
            <div style={{display: 'flex', padding: '5px 25px', justifyContent: 'space-between'}}>
              <p>Total</p>
              <p>{total.toFixed(2)} €</p>
            </div>
        <DialogActions>
          <Button variant='outlined' color='success' disabled={!cmdPresent} onClick={() => {
            props.confirmCommande()
           // props.setViewProduct((prev) => !prev)
            setShowItem(true)
          }}>Confirmer</Button>
          <Button variant='outlined' color='success' disabled={!cmdPresent} onClick={() => {
            props.cancelCommande() 
            window.location.reload();
          }}>Annuler</Button>      
        </DialogActions>
      </Dialog>
    </div>)}
    </>
  )
}

export default ViewProduct
