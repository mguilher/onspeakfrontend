import React, { Component } from 'react'
import { Redirect } from "react-router-dom";

import { Button, Modal,  Form, Grid, Header,  Segment, Message  } from 'semantic-ui-react'

import * as OnBoardingApi from '../Proxy/OnBoarding'

class SignUpModal extends Component {
  state = 
  { 
      open: false,
      name:'',
      document:'',
      email: '',
      password:'',
      messageVisible:false,
      signUpCompleted:false
  }

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
  }

  SignUpButton = () => {
        const { name, document,email,password } = this.state
        const json ={
            "userName": name, 
            "userDocument" : document, 
            "email": email,
            "password": password
        }
        console.log(json)
        OnBoardingApi.SignUp(json)
        this.setState({signUpCompleted: true})
        this.closeModal();

    }

    closeModal =()=>{
        this.setState({ name:'', document:'', email: '', password:'' })    
        this.setState({ open: false })
    }

  inputChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    const { open, closeOnEscape, closeOnDimmerClick,
            name, document, email, password, signUpCompleted } = this.state

            if (signUpCompleted === true) {
                return <Redirect to='/welcome' />
              }            

    return (
      <div>

        <Button basic color='teal' as='a' style={{ marginLeft: '0.5em' }}
            onClick={this.closeConfigShow(true, false)}>
                Sign Up
        </Button>

        <Modal basic
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
          <Modal.Content>
          <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                   
                        <Form size='large'>
                            <Segment stacked>
                            <Header as='h2' color='teal' textAlign='center'>
                                SignUp
                            </Header>     
                            <Form.Input onChange={this.inputChange} 
                                        fluid icon='user' iconPosition='left' 
                                        placeholder='Name' value={name} name="name"/>

                            <Form.Input onChange={this.inputChange} 
                                        fluid icon='window maximize' 
                                        iconPosition='left'
                                         placeholder='Document (CPF)'
                                         value={document} name="document"/>

                            <Form.Input onChange={this.inputChange} 
                                        fluid icon='mail'
                                        iconPosition='left'
                                        placeholder='Email'
                                        value={email} name="email" />

                            <Form.Input onChange={this.inputChange}
                                        fluid
                                        icon='lock'
                                        iconPosition='left'
                                        placeholder='Password'
                                        type='password'
                                        value={password} name="password" />


                            <Button.Group>
                                <Button  size='large'
                                    onClick={this.closeModal}>Cancel</Button>
                                <Button.Or text='or' />
                                <Button color='teal' size='large'
                                onClick={this.SignUpButton}>SignUp</Button>
                            </Button.Group>

                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default SignUpModal
