import React, {Component} from 'react'
import { Radio, Header, Segment } from "semantic-ui-react";

class QuizQuestion extends Component{

    render(){
        const {question, answer1, answer2, answer3, answer4,
            answer1Id, answer2Id, answer3Id, answer4Id } = this.props
        return (
            <div>
                <Header as="h4">{question}</Header>
    
                <Segment vertical>
                <Radio name="radioGroup" toggle label={answer1} value={answer1Id} />
                </Segment>
                <Segment vertical>
                <Radio name="radioGroup" toggle label={answer2} value={answer2Id} />
                </Segment>
                <Segment vertical>
                <Radio name="radioGroup" toggle label={answer3} value={answer3Id} />
                </Segment>
                <Segment vertical>
                <Radio name="radioGroup" toggle label={answer4} value={answer4Id}/>
                </Segment>
          </div>
        )
    }
}

export default QuizQuestion