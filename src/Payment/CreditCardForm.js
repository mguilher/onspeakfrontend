import React, {Component} from 'react';
import { Input,Container, Segment, Grid, Form } from "semantic-ui-react";
import PaymentCard from 'react-payment-card-component';

class CreditCardForm extends Component{

    render(){
        return (
            <Container>
                <PaymentCard
                  bank="default"
                  model="normal"
                  type="black"
                  brand=""
                  number="4111111111111111"
                  cvv="202"
                  holderName="Owen Lars"
                  expiration="12/20"
                  flipped={false}
                />


<Form>
    <Form.Group  widths={5}>
    <Form.Input fluid placeholder='Card Number' />
    </Form.Group>
    <Form.Group  widths={3}>
    <Form.Input fluid placeholder='Card Name' />    
    </Form.Group>
    <Form.Group  widths={8}>
    <Form.Input fluid placeholder='Expiration Date' />
    </Form.Group>

    <Form.Group  widths={10}>
    <Form.Input fluid placeholder='CVV' />
    </Form.Group>        
  </Form>






        </Container>


        )
    }
}

export default CreditCardForm