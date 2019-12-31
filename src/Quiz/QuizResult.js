import React, {Component} from 'react'
import { Grid,Icon, Header, Label, Segment, Container } from "semantic-ui-react";
import QuizAnswer from './QuizAnswer';

class QuizResult extends Component{
    state={
        questions: [            
            {
                "question":"Question1", 
                "aswers": 
                [
                    {"answer":"Resposta 1", "action": "wrong"},
                    {"answer":"Resposta 2", "action": ""},
                    {"answer":"Resposta 3", "action": "right"}, 
                    {"answer":"Resposta 4", "action": ""} 
                ]
            }
        ],
    }
    
    render(){
        const {questions} = this.state; 
        const square = { width: 100, height: 100 };        
        return (
            <Container style={{ margin: 20 }}>
                <Grid>
                    <Grid.Column>
                        <Segment raised>
                            <Label color="teal" ribbon>
                                <Icon name="question circle" />
                                QUIZ Result
                            </Label>

                            <Grid verticalAlign="middle">
                                <Grid.Row>
                                <Grid.Column width="2">
                                    <Segment circular style={square} inverted color='teal'>
                                        <Header as="h2">30</Header>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column width="14">
                                    <Header as="h2" textAlign="center" >
                                    You got 3 correct out of 10.
                                    </Header>
                                </Grid.Column>
                                </Grid.Row>
                            </Grid>                        
                        </Segment>
                    </Grid.Column>
                </Grid>


                    <Segment>
                    {/* Foreach */}
                    <QuizAnswer question={questions[0]}  />

                        
                    </Segment>              
            </Container>

        )
    }
}

export default QuizResult