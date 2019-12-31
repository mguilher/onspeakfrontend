import React, { Component } from 'react'
import { Redirect } from "react-router-dom";

import { Button, Modal,  Form, Grid, Header,  Segment  } from 'semantic-ui-react'

import * as OnBoardingApi from '../Proxy/OnBoarding'

class LoginModal extends Component {
  state = { open: false }
  state = 
  { 
      open: false,
      email: '',
      password:'',
      userValid: false,
      wrongUser:false
  }


  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
  }

  close = () => this.setState({ open: false })

  inputChange = (e, { name, value }) => this.setState({ [name]: value })

  userValid =()=>{

    const { email,password } = this.state
    const json ={
        "email": email,
        "password": password
    }
    console.log(json)


    OnBoardingApi.Login(json)
    .then(
        res => {
          if(res.error)
          {
            this.setState({ userValid: false })
            this.setState({wrongUser:true})
          }
          else {
            this.setState({ userValid: true })
            this.setState({wrongUser:false})
          }
        }

      )
      //Fazer Login
      
  }

  render() {
    const { open, closeOnEscape, closeOnDimmerClick, email, password, userValid, wrongUser } = this.state

    if (userValid === true) {
        return <Redirect to='/lessons' />
      }

    if (wrongUser===true){
      return <Redirect to='/userwrong' />
    }

    return (
      <div>
       <Button basic color='teal' as='a'
       onClick={this.closeConfigShow(true, false)}>
       Log in
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
                                LogIn
                            </Header>                                
                            <Form.Input fluid icon='user' iconPosition='left' 
                                      placeholder='E-mail address' 
                                      onChange={this.inputChange}  
                                      value={email} name="email"/>
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                onChange={this.inputChange} 
                                value={password} name="password"
                            />

                            <Button.Group>
                                <Button  size='large'
                                    onClick={this.close}>Cancel</Button>
                                <Button.Or text='or' />
                                <Button color='teal' size='large'
                                onClick={this.userValid}>Login</Button>
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

export default LoginModal
