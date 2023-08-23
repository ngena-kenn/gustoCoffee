import React from 'react'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import PaymentForm from "./paymentForm"

const PUBLIC_KEY = "pk_test_51NMvIYASFvhtEhClcmvwrNOuhsIK8bzDdQSSZ554jjMWmqe66mSIH7HAcDiFUQimWADxqHF0R3ueXUHHDY4yqdtH00IploSYPz"
const stripeTestPromise = loadStripe(PUBLIC_KEY)

 

export default function StripeContainer({prop1, prop2, prop3}) {

	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm  price={prop1} date={prop2} article={prop3}/>
		</Elements>
	)
}
