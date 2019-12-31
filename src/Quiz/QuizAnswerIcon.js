import React, {Component} from 'react'
import { Icon } from "semantic-ui-react";

class QuizAnswerIcon extends Component{
    render(){
        const {answerAction } = this.props
        return (
            <span>
                {answerAction === 'wrong' &&
                <Icon color='red' name= 'times circle' />}

                {answerAction === 'right' &&
                        <Icon color='green' name= 'check circle' />}  

                {answerAction === '' &&
                        <Icon />}   
            </span> 
        )
    }
}

export default QuizAnswerIcon

