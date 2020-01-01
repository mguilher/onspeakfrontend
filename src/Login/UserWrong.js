import React, {Component} from 'react'

import { Message, Icon, Segment, Container } from 'semantic-ui-react'

import TopNotAuthed from '../HomePage/Top'

class UserWrong extends Component{

    render(){
        return (

             <div>
                <TopNotAuthed />
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