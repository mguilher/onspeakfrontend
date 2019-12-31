import React, {Component} from 'react'
import LessonCard from './LessonCard'
import Top from '../HomePage/Top'
import { Image,Container, Card, Button, Segment, Form } from "semantic-ui-react";

import logo2 from '../img/logo2.png'

import * as LessonApi from '../Proxy/LessonApi'

class LessonList extends Component{
    state = {
        lessons:[]

    }

    componentDidMount(){
        this.setState({loading:true})
        LessonApi.getAll().then((lessons)=> {
          this.setState({lessons: lessons})
        })
      }

    render(){
        const {lessons} = this.state
        console.log(lessons)
        return (

            <div>
                <Top />
                <Container>
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