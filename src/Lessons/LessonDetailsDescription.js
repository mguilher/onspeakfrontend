import React, {Component} from 'react'
import { Accordion, Header, Icon, Button, Segment, Form } from "semantic-ui-react";


class LessonDetailsDescription extends Component{


    state = { activeIndex: 1 };    

    descriptionClick = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index;
    
        this.setState({ activeIndex: newIndex });
      };    

    render(){
        const {videoDescription} = this.props;
        return (
            <Accordion>
            <Accordion.Title
              active={this.state.activeIndex === 0}
              index={0}
              onClick={this.descriptionClick}
            >
              <Header as="h3">
                <Icon name="dropdown" />
                Description
              </Header>
            </Accordion.Title>
            <Accordion.Content active={this.state.activeIndex === 0}>
              <p>
                {videoDescription}}
              </p>
            </Accordion.Content>
          </Accordion>            
        )
    
    }
}

export default LessonDetailsDescription