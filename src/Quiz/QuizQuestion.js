import React, {Component} from 'react'
import { Radio, Header, Segment } from "semantic-ui-react";

class QuizQuestion extends Component{
    state ={
        quiz : []
    }

    handleChange =(optionId, questionId)=>{

        console.log(optionId)
        console.log(questionId)

        let {quiz} = this.state


    }



    render(){
        const {questionName, questionId, options} = this.props
        console.log(questionId);
        return (
            <div>
                <Header as="h4">{questionName}</Header>
    
                {options && options.map((option)=>(
                                <span key={option.Id}>
                                    <Segment vertical>
                                        <Radio name={"radioGroup" +{questionId} } 
                                            toggle label={option.Option} 
                                            value={option.Id} 
                                            
                                            onChange={(e)=>this.handleChange(option.Id, questionId)}
                                            />
                                    </Segment>                                    
                                </span>
                            ))}
          </div>
        )
    }
}

export default QuizQuestion