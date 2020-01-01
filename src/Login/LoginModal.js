import React, { Component } from 'react'
import { Redirect, Route,withRouter  } from "react-router-dom";

import { Button, Modal,  Form, Grid, Header,  Segment  } from 'semantic-ui-react'
import LessonList from '../Lessons/LessonList'
import * as OnBoardingApi from '../Proxy/OnBoarding'

class LoginModal extends Component {
  state = 
  { 
      open: false,
      email: '',
      password:'',
      userValid: false,
      wrongUser: false
  }


  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
  }

  close = () => this.setState({ open: false })

  inputChange = (e, { name, value }) => this.setState({ [name]: value })

  
  userValid =(e)=>{
    e.preventDefault()

    const { email,password } = this.state
    const json ={
        "email": email,
        "password": password
    }

    OnBoardingApi.Login(json)
    this.setState({userValid: true, wrongUser: false})
    


    //OnBoardingApi.Login(json).then(e=>this.setState({userValid: !e, wrongUser:e}  ))
    
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
           {/*
        <Route path="/lessons" render={()=>(
                    <LessonList isAuthed={true}/>
                  )} 
                />
        */}  
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
                                <Button onClick={this.userValid} color='teal' size='large'
                                >Login</Button>
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

export default withRouter(LoginModal);

