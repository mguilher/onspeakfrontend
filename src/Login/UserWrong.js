import React, {Component} from 'react'

import { Message, Icon, Segment, Container } from 'semantic-ui-react'

import Top from '../HomePage/Top'

class UserWrong extends Component{

    render(){
        return (

             <div>
                <Top />
                <Container>

                    <Message  compact negative
                        icon='thumbs down'
                        header="There's something wrong with your login"
                        content='Verify your email and password.'
                        />
                </Container>
            </div>
                             
        )
    }
}

export default UserWrong