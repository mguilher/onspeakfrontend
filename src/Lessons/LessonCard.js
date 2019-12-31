import React, {Component} from 'react'
import { Card, Image } from 'semantic-ui-react'
import LessonDetailsModal from './LessonDetailsModal'

class LessonCard extends Component{

    render(){
        const {lesson} = this.props
        return (

<div>
  <Card padding >
    <Image src={lesson.lessonImageUrl} wrapped ui={false} />
    <Card.Content>
      <Image
      floated='left'
      size='mini'
      src={lesson.teacherImageUrl} />
      
      <Card.Description>
        {lesson.teacherName}
      </Card.Description>
    </Card.Content>
    <Card.Content>
      <Card.Header>{lesson.lessonTitle}

        <LessonDetailsModal lesson = {lesson} />    
      </Card.Header>
    </Card.Content>
  </Card>   

</div>                             
        )
    }
}

export default LessonCard