import React, {Component} from 'react'
import { Header,Container, Segment, Icon } from "semantic-ui-react";
import QuizAnswerIcon from './QuizAnswerIcon'

class QuizAnswer extends Component{

    render(){
        const {question } = this.props
        return (
            <Container>
                <Header as="h4">{question.question}</Header>
    
                <Segment vertical>
                    <QuizAnswerIcon answerAction={question.aswers[0].action}  />             

                    {question.aswers[0].answer}
                </Segment>
                <Segment vertical>
                <QuizAnswerIcon answerAction={question.aswers[1].action}  />
                    {question.aswers[1].answer}
                </Segment>
                <Segment vertical>
                <QuizAnswerIcon answerAction={question.aswers[2].action}  />
                    {question.aswers[2].answer}
                </Segment>
                <Segment vertical>
                <QuizAnswerIcon answerAction={question.aswers[3].action}  />
                {question.aswers[3].answer}
                </Segment>
          </Container>
        )
    }
}

export default QuizAnswer