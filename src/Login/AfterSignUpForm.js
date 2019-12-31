import React, {Component} from 'react'
import { Message, Image, Segment, Container } from 'semantic-ui-react'

import Top from '../HomePage/Top'

class AfterSignUpForm extends Component{

    render(){
        return (

            <div>
                <Top />
                <Container>
                    <Message floating compact positive
                        icon='thumbs up'
                        header='Thanks for subscribing, '
                        content='As soon as possible we will send an email with next step.'
                        />
                </Container>
            </div>



        )
    }
}

export default AfterSignUpForm