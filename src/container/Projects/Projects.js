import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import {
    ImageButton,
    Index,
    ImageContainer,
    Title
} from './Projects.style';

import {Container, Relative, Flex} from '../../theme/grid';
import ParallaxImage from 'react-image-parallax2';

class Projects extends Component {
    render(){
        return(
            <Container>
              {/* <h1>Projects</h1> */}
              <Title>Projects</Title>

                <Relative marginTop = "100px" marginBottom = "50px">
                <Index>
                    <h1>01</h1>
                </Index>
                <h1>npm install --save react-zoome</h1>
                </Relative>
                <Flex justify = {'center'} marginBottom = "5em">
                <Zoomy
  imageUrl={require('../../assets/bipin.jpg')}
  renderThumbnail={({ showImage }) => 
//   <ImageButton src={require('../../assets/bipin.jpg')} onClick={showImage}/>
<ImageButton  onClick={showImage}>
<img src = {require('../../assets/bipin.jpg')} alt="bipin.jpg"/>
</ImageButton>

  }
  scale={[1.1, 1.1]}
  imageProps={{
    style: {
      width: '50vw',
      height: 'auto'
    }

  }}
    />
 </Flex>
               
    <Relative marginBottom = "50px">
                <Index>
                    <h1>02</h1>
                </Index>
                <h1>npm install --save react-zoome</h1>
    </Relative>
    <ImageContainer marginBottom= "20px">

      
      <ParallaxImage 
                 reduceHeight= {1/3}             
                src =  {require('../../assets/homeimage.jpg')} alt="bipin.jpg"/>
    </ImageContainer>
   
 </Container>            
        );
    }
}

export default Projects;
