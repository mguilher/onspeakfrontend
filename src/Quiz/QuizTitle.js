import React, {Component} from 'react'
import { Grid,Icon, Header, Label, Segment, Container, Button } from "semantic-ui-react";
import QuizQuestion from './QuizQuestion';

class QuizTitle extends Component{

    render(){
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

                    <Segment>
                    {/*Foreach com todas as perguntas*/ }
                    <QuizQuestion question="Long work hours leave many parents with __________ time for their children" 
                            answer1="less" answer2 ="lower" answer3="least" answer4="low"
                            answer1Id="456789" answer2Id="666666" answer3Id="411651" answer4Id="1200542" />
                    </Segment>
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