import React,{useEffect, useState }from 'react'
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
import { useCart } from 'react-use-cart';
import axios from "axios"



const ViewProduct = (props) => {
  const [showItem, setShowItem] = useState(false);
  const [openDate, setOpenDate] = useState(true);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [values, setValues] = useState([{article:'', date:'', }, ]) 


    useEffect(() => {
      axios.post(`${process.env.REACT_APP_SERVER_URL}/listesale`)
        .then(response => {
          setValues(response.data); 
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des données:', error);
        });
    }, []); 
   
    
    
    const start = dates[0].startDate;
    const end = dates[0].endDate;
    const resultTime = end - start ;
    const resultDays = resultTime / (1000 * 3600 * 24) + 1;
    
    const jour1 = format(dates[0].startDate, "MM/dd/yyyy").toLocaleString()
    const jour2 = format(dates[0].endDate, "MM/dd/yyyy").toLocaleString()
    const jours = jour1 +"-"+ jour2 ;
    const jourfinal = jours.toString()

  let total = 0
  let article = ""
  const {isEmpty, items, cartTotal, updateItemQuantity, removeItem, emptyCart} = useCart();
  const cmdPresence = items.length > 0

  const produit = items.map((item, index) => {
  total += parseFloat(item.price) * resultDays
  article += `${item.title}`;
  return (
          <tr key={index}>
              <td>
                  <div style={{ background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
                  justifyContent: 'center', alignItems: 'center' }}>
                      <div style={{ padding: '.5rem'}}>
                          <img src={item.image} style={{ width: '4rem'}} alt={item.title} />
                      </div>
                  </div>
              </td>
              <td>
                  <h6 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverFlow: 'ellipsis'}}>
                      {item.title}
                  </h6>
              </td>
              <td>Rs. {item.price}</td>
              <td>
                <Button onClick={()=> updateItemQuantity(item.id, item.quantity - 1)} className="ms-2">-</Button>
                <Button onClick={()=> updateItemQuantity(item.id, item.quantity + 1)} className="ms-2">+</Button>
                <Button variant="danger" onClick={()=> removeItem(item.id)} className="ms-2">Remove Item</Button>
              </td>
              <Divider variant='fullWidth'/>
          </tr>
    )
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
       className="payment "
    >
				<StripeContainer prop1={total *100} prop2={jourfinal} prop3={article}/>
        </Dialog>
			) :(
    <div>
      <Dialog
        //style={{min-height: 'calc(100% - 4rem)', max-height:'1px !important' margin-top:"15rem"}}
        open={props.viewProduct}
        className="dialog liste"
        onClose={() => {
          props.setViewProduct((prev) => !prev)
         }}

      >
        <div className="container  mt-2">
        <DialogTitle className="labellist">voir la liste des sale reserver<br/> sous peine d'avoir une annulation si<br/> vous reserver une sale deja prise</DialogTitle>
        <select className="checklist" value="option">
        <option disabled value="option" >voir la liste</option>
        {values.map(item => (
        <option disabled ><div>{item.article}</div>  <div>{item.date}</div></option>))}
      </select>
      </div>
        <div  className="container py-4 mt-5">
            <div className="row justify-content-center">
                <table responsive="sm" striped bordered hover className="mb-5">
                    <tbody>
                    {cmdPresence? produit : <div style={{fontSize: 30, textAlign: 'center'}}>
              Vous n'avez pas encore fait de commandes
             </div>}
                    </tbody>
                </table>
            </div>
        </div>
        {/* <DialogContent style={{ height: '300px', width: '500px', paddingTop: 15}}>
          <DialogContentText>
          </DialogContentText>
            <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              {cmdPresent ? produits : 
             <div style={{fontSize: 30, textAlign: 'center'}}>
              Vous n'avez pas encore fait de commandes
             </div>  }
            </div>
        </DialogContent> */}
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
          <Button variant='outlined' color='success' onClick={() => {
            props.confirmCommande()
           // props.setViewProduct((prev) => !prev)
            setShowItem(true)
          }}>Confirmer</Button>
          <Button variant='outlined' color='success'  onClick={() => { 
            emptyCart()
            window.location.reload();
          }}>Annuler</Button>      
        </DialogActions>
      </Dialog>
    </div>)}
    </>
  )
}

export default ViewProduct
