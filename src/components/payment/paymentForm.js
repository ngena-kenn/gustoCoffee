import { CardElement, useElements, useStripe, LinkAuthenticationElement } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState, useRef} from 'react'
import '../../css/payment.scss';
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { useCart } from 'react-use-cart';
import emailjs from '@emailjs/browser';




const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm({price, date, article}) {

    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const [values, setValues] =useState({
        name:'',
        email:'',
        date,
        price,
        article
        
   
    }) 
    //  let start = date[0].startDate;
    //  let end = date[0].endDate;
    //  const dat = start +"-"+ end ;
    //  const jour = dat.toString();
    
    const { emptyCart } = useCart();
    const form = useRef();

    // ${process.env.REACT_APP_SERVER_URL}

    

   
    const handleInput = (e) =>{
        setValues(prev =>({...prev,[e.target.name]: [e.target.value]}))
    }
    const dates = date;
    const navigate = useNavigate();
    

    const sendEmail = () => {
        const data ={name:values.name.toString(), email:values.email.toString(), article:values.article, date:values.date}
        console.log('form ', data );
        emailjs.send('service_ggnvs77', 'template_z52u53i', data , 'q-876_psFwv_ORXjP')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });
      };

    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
            
        
    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/payment`, {
                amount: price ,
                id,

            })

            if(response.data.success) {
                sendEmail()
                axios.post(`${process.env.REACT_APP_SERVER_URL}/reservationlist`, values)
                .then(res => console.log(res))
                .catch(err => console.log(err));
                console.log("Successful payment")
                setSuccess(true);


                
                
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}



    return (
        <>
        {!success ? 
        <form ref={form} onSubmit={handleSubmit} style={{width: '30rem', height: '40rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop:"2rem"}}>
            <div className='mb-3'>
            <input
          placeholder="Enter your Name"
          name="name"
          onChange={handleInput}
          required
          type="text"
          className="form-control" 
        ></input>
        </div>
        <div className='mb-3'>
        <input
          placeholder="Enter your email"
          name="email"
          required
          type="email"
          onChange={handleInput}
          className="form-control"
        ></input>
        </div>
        <div className="lsItem">
              <label onChange={handleInput} name="article" >{article}</label>
              <label> du </label>
              <span name="date" onChange={handleInput}>{dates}</span>
            </div>
            <fieldset className="FormGroup">
                <div className="FormRow" >
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <div className="forme">
            <button  class="nav-item" >Pay</button> 
            <button class="nav-item" onClick={() => {
            window.location.reload()
            navigate('/espaces') }}>Annuler</button>
            </div>
        </form>
        :
       <div>
           <h2>merci de votre reservation vous allez recevoir un mail de confirmation</h2>
           <button class="nav-item" variant='outlined' color='success'  onClick={() => { 
             emptyCart();
            window.location.reload();
            navigate('/espaces')
          }}>revenir</button>
       </div> 
        }
            
        </>
    )
}