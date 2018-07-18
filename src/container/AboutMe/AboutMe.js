import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import {Title} from './AboutMe.style';

class AboutMe extends Component {
  render() {
    return (
      <Container>
       <Title>About Me</Title>
       <h2> I like playing and watching football.</h2>
       <p>Ma jaile ni football herxu dherai premier league ra champions league man parxa malai. Eti nai xa aile samma lai</p>
     </Container>
    );
  }
}

export default AboutMe;
