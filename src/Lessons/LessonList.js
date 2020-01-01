import React, {Component} from 'react'
import LessonCard from './LessonCard'
import Top from '../HomePage/Top'
import { Image,Container, Card, Icon, Button, Input, Segment, Form } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

import logo2 from '../img/logo2.png'

import * as LessonApi from '../Proxy/LessonApi'

class LessonList extends Component{
    state = {
        lessons:[]

    }

    componentDidMount(){
        LessonApi.getAll().then((lessons)=> {
          this.setState({lessons: lessons})
        })
      }


      updateSearchText = (inputSearchText) => {
          console.log(inputSearchText);
        this.setState({searchText: inputSearchText})
    }

      getLessons = () =>{       
        const {searchText} = this.state
        LessonApi.getByCriteria(searchText)
        .then((lessons) => {
            this.setState({lessons: lessons})
        })
        .catch((error) => {
            this.setState({ lessons: []})
        });
    }

    render(){
        const {lessons} = this.state       

        return (

            <div>
                <Top />

                <Container>
                        <Segment  inverted color='teal'>
                        <Input  inverted fluid onChange={(event)=>this.updateSearchText(event.target.value)} 
                            type='text' placeholder='Search...' action>
                            <input />
                            <Button onClick={this.getLessons}> <Icon name='search' />Search</Button>
                        </Input>
                        </Segment>

                <Segment >
                        <Card.Group centered>
                        
                            {lessons && lessons.map((lesson)=>(
                                <span key={lesson.lessonId}>
                                        <LessonCard  lesson={lesson}    />
                                </span>
                            ))}

                        </Card.Group>
                </Segment>
                </Container>
            </div>



        )
    }
}

export default LessonList