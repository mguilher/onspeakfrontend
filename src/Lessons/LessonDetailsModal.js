import React, {Component} from 'react'

import LessonDetailsDescription from './LessonDetailsDescription'
import QuizTitle from '../Quiz/QuizTitle'

import {Button, Container, Grid, Embed, Feed, Header, Accordion, Icon, Modal, Segment } from "semantic-ui-react";

class LessonDetailsModal extends Component{

    state = { open: false };

    closeConfigShow = closeOnDimmerClick => () => {
      this.setState({ closeOnDimmerClick, open: true });
    };
  
    close = () => this.setState({ open: false });
  

  
    render() {
      const { open, closeOnDimmerClick } = this.state;
      const {lesson} = this.props;
  
      return (
        <div>

            <Button icon labelPosition='left' basic color='teal' as='a' style={{ marginLeft: '0.5em' }}
                        onClick={this.closeConfigShow(true, false)}>
                <Icon name='video' />
                Watch
            </Button>

  
          <Modal size="large" open={open} closeOnDimmerClick={closeOnDimmerClick} onClose={this.close}>
            <Modal.Header>
              {lesson.lessonTitle}
            </Modal.Header>
            <Modal.Content>
              <Container>
                <Embed id={lesson.lessonVideoUrl} active={true} source="youtube" brandedUI/>
                <Grid>
                  <Grid.Row>
                    <Grid.Column style={{ padding: 10 }}>
                      <Feed>
                        <Feed.Event
                          image={lesson.teacherImageUrl}
                          summary= {`${lesson.teacherName}  From ${lesson.teacherCountry}`}
                        />
                      </Feed>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>

                        <LessonDetailsDescription videoDescription={lesson.lessonDescription} />

                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                      <Grid.Column>
                            <QuizTitle />
                      </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>
            </Modal.Content>
            <Modal.Actions>
              <Button
                onClick={this.close}
                color="teal"
                labelPosition="left"
                icon="student"
                content="Close Lesson"
              />
            </Modal.Actions>
          </Modal>
        </div>
      );
    }
  }

export default LessonDetailsModal