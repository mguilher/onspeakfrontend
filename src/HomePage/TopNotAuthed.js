import React, {Component} from 'react'
import { Image,Container, Menu, Button, Segment, Form } from "semantic-ui-react";
import { Link} from 'react-router-dom'
import logo2 from '../img/logo2.png'

class TopNotAuthed extends Component{

    render(){
        return (

        <Segment
            color='teal'
            textAlign='center'
            style={{ minHeight: 80, padding: '1em 0em' }}
            vertical
            inverted
          >                
            <Menu
              inverted 
              color='teal'
              fixed='top'
              secondary={true}
              size='large'
            >
              <Container style={{ minHeight: 80, padding: '1em 0em' }}>
                <Link to="/">
                <Image src={logo2} size='small'  />
                </Link>
                <Menu.Item position='right'  inverted>
                </Menu.Item>
              </Container>
            </Menu>
        </Segment>

        )
    }
}

export default TopNotAuthed