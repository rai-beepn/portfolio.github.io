import React, {Component, Proptypes} from 'react';
 import {Container} from '../../theme/grid';

 import {
     Image,
     HeroImage,
     RevealP
    } from './Home.style';

    import WhenInView from '../../components/WhenInView/WhenInView';


export default class Home extends Component{
static propTypes = {};
    render() {
        return(
        <Container>
           <HeroImage>
               <h1>Bipin Rai</h1>
               <h2>Full Stack Developer</h2>
           </HeroImage>

           <WhenInView>
               {({isInView}) =>
             <RevealP hide={!isInView}>
             Et ut magna Lorem consequat consequat et consequat. Adipisicing consequat eu qui officia veniam ex Lorem sit excepteur exercitation enim irure excepteur veniam. Consequat commodo mollit proident occaecat aliqua proident cillum 
             occaecat amet ea nisi est exercitation culpa. Dolor cillum voluptate consectetur nostrud id ut excepteur cupidatat id ex ex. Sit ea pariatur enim sunt nostrud aute dolor
              est proident. Pariatur ut dolore fugiat culpa consectetur irure amet sit elit dolor magna. In adipisicing labore proident ullamco sit dolore.

Aliquip veniam reprehenderit Lorem voluptate occaecat in adipisicing irure tempor. Tempor reprehenderit id nisi quis aliqua in enim eu magna. Pariatur eu sint ad mollit deserunt id elit pariatur nisi
cupidatat consectetur proident. Laboris proident esse cupidatat occaecat est labore incididunt magna dolore pariatur amet anim fugiat.

Aliquip aliqua cupidatat anim in voluptate Lorem cupidatat do Lorem exercitation elit eiusmod eu. Ut fugiat labore et proident exercitation aute quis reprehenderit nulla sit.
Non eiusmod consequat amet officia esse occaecat do cupidatat amet. Eiusmod sint nisi magna veniam deserunt. Id Lorem cillum voluptate quis amet incididunt ex. Consectetur veniam eiusmod nostrud ut in aliqua adipisicing amet fugiat mollit ut amet laborum. Et consequat quis laboris consequat ad exercitation non adipisicing.Dolore adipisicing aute nostrud culpa fugiat elit. Consequat amet elit non enim esse consectetur aute nulla reprehenderit ut proident. Commodo Lorem proident adipisicing aliquip mollit laborum aliqua do nostrud proident ea et id laboris. Ullamco dolor enim mollit occaecat magna non incididunt culpa Lorem nisi commodo. Quis excepteur fugiat ut sunt labore aliqua. Occaecat ullamco id esse veniam nulla sint magna. Officia non do laboris irure aliqua dolore et consequat id duis.
             </RevealP> 
            }
           </WhenInView>

           
        </Container>
        )
    }

};

