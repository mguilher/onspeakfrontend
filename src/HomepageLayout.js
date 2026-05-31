import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import logo from './img/logo.png'
import LoginModal from './Login/LoginModal'
import SingUpModal from './Login/SignUpModal'

const TABLET_MIN_WIDTH = 768;
const MOBILE_MAX_WIDTH = 767;

const useWindowWidth = () => {
  const isSSR = typeof window === 'undefined';
  const [width, setWidth] = useState(isSSR ? TABLET_MIN_WIDTH : window.innerWidth);
  useEffect(() => {
    if (isSSR) return;
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSSR]);
  return width;
};

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='The Modern Way to Learn a Language.'
      inverted
      style={{
        fontSize:  '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop:  '3em',
      }}
    />
    <Header
      as='h2'
      content="Let's get started!"
      inverted
      style={{
        fontSize: '1.7em',
        fontWeight: 'normal',
        marginTop:  '1.5em',
      }}
    />

  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
const DesktopContainer = ({ children }) => {
  const [fixed, setFixed] = useState(false);
  const width = useWindowWidth();

  if (width < TABLET_MIN_WIDTH) return null;

  return (
    <div>
      <Visibility
        once={false}
        onBottomPassed={() => setFixed(true)}
        onBottomPassedReverse={() => setFixed(false)}
      >
        <Segment
          color='teal'
          textAlign='center'
          style={{ minHeight: 350, padding: '1em 0em' }}
          vertical
          inverted
        >
          <Menu
            inverted
            style={{ backgroundColor: 'white' }}
            fixed='top'
            secondary={true}
            size='large'
          >
            <Container>
              <Image src={logo} size='small' />
              <Menu.Item position='right' inverted>
                <LoginModal />
                <SingUpModal />
              </Menu.Item>
            </Container>
          </Menu>
          <HomepageHeading />
        </Segment>
      </Visibility>
      {children}
    </div>
  );
};

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

const MobileContainer = ({ children }) => {
  const width = useWindowWidth();

  if (width > MOBILE_MAX_WIDTH) return null;

  return (
    <div>
      <Segment
        inverted
        color='teal'
        textAlign='center'
        style={{ minHeight: 250, padding: '1em 0em' }}
        vertical
      >
        <Container>
          <Menu
            fixed='top'
            secondary={true}
            inverted size='large' style={{ backgroundColor: 'white' }}>
            <Menu.Item position='left'>
              <Image src={logo} size='small' />
            </Menu.Item>
            <Menu.Item position='right' fixed>
              <Button as='a' basic color='teal'>
                Log in
              </Button>
              <Button as='a' basic color='teal' style={{ marginLeft: '0.5em' }}>
                Sign Up
              </Button>
            </Menu.Item>
          </Menu>
        </Container>
        <HomepageHeading mobile />
      </Segment>
      {children}
    </div>
  );
};

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h2' style={{ fontSize: '1.5em' }}>
              Free English Video Lessons
            </Header>
            <p style={{ fontSize: '1.11em' }}>
            Learn English with video lessons by experienced native-speaker teachers. Classes cover English grammar, vocabulary, pronunciation, IELTS, TOEFL, and more.              
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h2' style={{ fontSize: '1.5em' }}>
            Enjoy the Journey
            </Header>
            <p style={{ fontSize: '1.11em' }}>
            Learning a language is a long-term undertaking with many obstacles along the way. Maintaining motivation and being consistent is key but more importantly, enjoy the journey.              
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment inverted vertical style={{ padding: '1em 0em' }}>
    </Segment>
  </ResponsiveContainer>
)
export default HomepageLayout