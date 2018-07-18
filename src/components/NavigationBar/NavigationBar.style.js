import styled from 'styled-components';
import {Flex,Div} from '../../theme/grid';
import {blue, black, red, yellow} from '../../theme/variables'
import {Link} from 'react-router';

export const NavigationContainer = styled(Flex)`
position : fixed;
// right: 0;
right: 2em;
// top: 0.5em;
`;

export const NavItem = styled(Link)`
margin-right: 30px;
font-size: 1.5em;
right: 1em;
cursor: pointer;
color: ${blue};
position: relative;
text-decoration: none; 

&:hover {
    color: ${black};
    &:after {
        content: ' ';
        position: absolute;
        left: 0;
        top: 0;
        width: 0;
        height: 0;
        background-color: ${red};
        z-index: -1;
        transform : scale(1.3);
    }
}
`;

