import { CardElement, useElements, useStripe, LinkAuthenticationElement } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState} from 'react'
import '../../css/payment.scss';
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";




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

export default function PaymentForm({price, date}) {

    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const [values, setValues] =useState({
        name:'',
        email:'',
        date,
        price
   
    }) 
    // let start = date[0].startDate;
     //let end = date[0].endDate;
     //let dat = start +"-"+ end ;
 
    const handleInput = (e) =>{
        setValues(prev =>({...prev,[e.target.name]: [e.target.value]}))
    }
    const dates = date;
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        

    
        
    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:4000/payment", {
                amount: price ,
                id,

            })

            if(response.data.success) {
               
                axios.post('http://localhost:4000/reservationlist', values)
                .then(res => console.log(res))
                .catch(err => console.log(err));
                console.log("Successful payment")
                setSuccess(true)
                //navigate('/successpay')
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
      
        <form onSubmit={handleSubmit} style={{width: '30rem', height: '40rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop:"3rem"}}>
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
              <label>Check-in Date</label>
              <span name="date" onChange={handleInput}>{`${format(
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
            </div>
            <fieldset className="FormGroup">
                <div className="FormRow" >
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <div className="forme">
            <button class="nav-item" >Pay</button> 
            <button onClick={() => {
            window.location.reload()}}>Annuler</button>
            </div>
        </form>
        :
       <div>
           <h2>You just bought a sweet spatula congrats this is the best decision of you're life</h2>
       </div> 
        }
            
        </>
    )
}