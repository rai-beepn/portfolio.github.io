import styled from 'styled-components';
import {yellow} from '../../theme/variables';
import {blue} from '../../theme/variables';
import {red}  from '../../theme/variables';

export const ImageButton = styled.div`
cursor: pointer;
overflow: hidden;
display: inline-block;

// transition: transform.3s;
&>img{
     transition: transform.5s;
 }

&:hover{
    &>img{
        transform: scale(1.3);
    }
}
`;

export const Index = styled.div`
position: absoute;
left:0;
bottom:0;
h1{
    font-size: 3em;
    margin: 0;
    color: ${blue};
    z-index: -1;
    opacity: 0.4;

}
`;

export const ImageContainer = styled.div`
width: 800px;
height: 100vh;
margin-left: auto;
margin-right: auto;
`;

export const Title = styled.h1`
color: ${red};
font-weight: bold;
margin-top: 0;

`;