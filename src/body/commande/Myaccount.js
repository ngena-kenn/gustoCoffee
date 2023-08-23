import React, { useEffect, useState } from "react";
import Heading from './heading'
import { Container, Row, Col, Tab, Nav, Image, Form, Button, Badge } from 'react-bootstrap';
import profilePix from '../../image/logo.png';
import { FaClipboardList, FaUser } from 'react-icons/fa';
import { GiWallet} from 'react-icons/gi';
import {getAuth , signOut, onAuthStateChanged } from "firebase/auth";
import { app } from "../../firebaseconfig";
//import { IoLocationSharp } from 'react-icons/io5';
import OrderCard from './OrderCard';
import axios from "axios"
import { useNavigate } from "react-router-dom";


const MyAccount = () => {
    
    const auth = getAuth(app);
    const [authUser, setAuthUser] = useState(null);
    const navigate = useNavigate();
   
    const [values, setValues] = useState([
    {name:'',
        email:'',
        date:'',
        price:'',
        article:''
     },
      ]) 


    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
          if (user) {
            setAuthUser(user);
            axios.post(`${process.env.REACT_APP_SERVER_URL}/reservationuser`, {
                email: user.email,
             })
                .then((res) =>{
                    if(res.data.message){
                        setValues(res.data.message)
                    }else{
                        setValues(res.data)
                    }
                })
          } else {
            setAuthUser(null);
          }
        });
    
        return () => {
          listen();
        };
      }, []);

      
const emailstat = () =>{
    return(
        <div>
            {authUser ? (
                <>
                    {`${authUser.email}`}
                </>
                ) : (
            <>Déconnecté</>
            )}
        </div>
    )

}
const email = emailstat()

    const userSignOut = () => {
        signOut(auth)
          .then(() => {
            console.log("sign out successful");
            navigate('/home')
          })
          .catch((error) => console.log(error));
      };



    return (
        <Container className="py-5 mt-5">
            <Heading heading="My Account" />
            <Tab.Container defaultActiveKey="my-orders">
                <Row className="justify-content-evenly mt-4 p-1">
                     <Col sm={3} className=" p-2 rounded h-100 mb-3 user-menu">
                        <Row className="mb-3 py-2">
                           <Col xs={3} className="pe-0">
                                <Image
                                    src={profilePix}
                                    thumbnail
                                    fluid
                                    roundedCircle
                                    className="p-0"
                                />
                           </Col> 
                           <Col xs={9} className="pt-1">
                                <span>Hello,</span>
                                <div >
                                {email}
                                    </div>
                           </Col>
                        </Row>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item className="mb-3">
                                <Nav.Link eventKey="my-orders">
                                    My Orders
                                    <FaClipboardList size="1.4rem" />
                                </Nav.Link>
                                <Nav.Link eventKey="account-details">
                                    Account Details
                                    <FaUser size="1.4rem" />
                                </Nav.Link>
                                <Nav.Link eventKey="address">
                                    Address
                                </Nav.Link>
                                <Nav.Link eventKey="wallet">
                                    Wallet
                                    <GiWallet size="1.4rem" />
                                </Nav.Link>
                                <button onClick={userSignOut}>Déconnexion</button>
                            </Nav.Item>
                        </Nav>
                     </Col>
                     <Col sm={8} className="p-2 rounded">
                        <Tab.Content>
                            <Tab.Pane eventKey="my-orders">
                                <Heading heading="My Orders" size="h3" />
                                
                               {values.map(item => (
                                <OrderCard 
                                    orderDate={item.date}
                                    orderId={item.price}  
                                    title={item.article}
                                    img={profilePix}
                                    deliveredDate={item.date}
                                />))}
                            </Tab.Pane>
                            <Tab.Pane eventKey="account-details">
                                <Heading heading="Account details" size="h3" />
                            </Tab.Pane>
                            <Tab.Pane eventKey="address">
                                <Heading heading="Address" size="h3" />
                            </Tab.Pane>
                            <Tab.Pane eventKey="wallet">
                                <Heading heading="Wallet" size="h3" />
                            </Tab.Pane>
                        </Tab.Content>
                     </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export default MyAccount;