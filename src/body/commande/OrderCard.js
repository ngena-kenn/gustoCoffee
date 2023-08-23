import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';


const OrderCard = (props) => {
    
    return (
       <Card className="mb-3"border='primary'>
            <Card.Header>
                <b>{props.orderDate}</b>
                <small className="float-end">Order ID: {props.orderId}</small>
            </Card.Header>
            <Row className="p-2">
                <Col xs={3} sm={2}>
                    <Card.Img variant="top" src={props.img} />
                </Col>
                <Col>
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            <Badge pill bg="success">
                                Commande du {props.deliveredDate}
                            </Badge>
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
       </Card>
    );
};
export default OrderCard;