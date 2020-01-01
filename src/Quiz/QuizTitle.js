import React, {Component} from 'react'
import { Grid,Icon, Header, Label, Segment, Container, Button } from "semantic-ui-react";
import QuizQuestion from './QuizQuestion';

class QuizTitle extends Component{

    state={
        Quiz:[
            {
                QuestionId : 1,
                Question : "Question 1",
                Options:[
                    {
                        Id : 1,
                        Option : "Option1",
                        IsRight : false
                    },
                    {
                        Id : 2,
                        Option : "option2",
                        IsRight : false
                    },
                    {
                        Id : 3,
                        Option : "option3",
                        IsRight : true
                    }
                ]
            },
            {
                QuestionId : 2,
                Question : "Question 2",
                Options:[
                    {
                        Id : 11,
                        Option : "Option11",
                        IsRight : false
                    },
                    {
                        Id : 21,
                        Option : "option21",
                        IsRight : true
                    },
                    {
                        Id: 31,
                        Option : "option31",
                        IsRight : false
                    }
                ]
            }            
        ] 
    }

    render(){
        const {Quiz} = this.state;
        return (

            <div>
                <Container style={{ margin: 20 }}>
                <Grid>
                    <Grid.Column>
                    <Segment raised>
                        <Label  color="teal" ribbon>
                        <Icon name='question circle' />
                        QUIZ
                        </Label>
                        <span>
                        <Header as="h2" color="teal" textAlign="center">
                        Test your understanding of this English lesson
                        </Header>
                        </span>
                    </Segment>

                    
                    {Quiz && Quiz.map((question)=>(

                                    <span key={question.QuestionId}>
                                        <Segment>
                                            <QuizQuestion questionId={question.QuestionId} questionName={question.Question} options={question.Options}  /> 
                                        </Segment>
                                    </span>
                            ))}


                    {/*Foreach com todas as perguntas*/ }

                    
                    </Grid.Column>

                </Grid>
                <Grid>
                <Grid.Column>
                           <Button color='teal'>Finish Quiz</Button>
                    </Grid.Column>                    
                </Grid>
                </Container>
            </div>
        )
    }
}

export default QuizTitle