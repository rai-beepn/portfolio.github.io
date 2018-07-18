import styled, {css} from 'styled-components';
import media from './media';


export const Div= styled.div`

${({marginBottom}) => marginBottom && css`
margin-bottom: ${marginBottom};
`}
${({marginLeft}) => marginLeft && css`
margin-left: ${marginLeft};
`}
${({marginRight}) => marginRight && css`
margin-right: ${marginRight};
`}
${({marginTop}) => marginTop && css`
margin-Top: ${marginTop};
`}

`;



export const Container = styled.div`
padding-left: 120px;
padding-right: 120px;
padding-top: 30px;


${media.tablet`
padding-lef:30px;
padding-right: 30px;
padding-top: 15px;
`}

${media.phone`
padding-lef:10px;
padding-right: 10px;
padding-top: 15px;
`}

// ${media.desktop`
// padding-lef:10px;
// padding-right: 10px;
// padding-top: 15px;
// `}

// ${media.giant`
// padding-lef:10px;
// padding-right: 10px;
// padding-top: 15px;
// `}


`;

export const Relative = styled.div`
position: relative;
`;

export const Flex = styled.div`
display: flex;

${({column})=>column && css`
flex-direction: column;

`}

${({justify})=>justify && css`
justify-content : ${justify};

`}

${({align})=>align && css`
justify-content : ${align};

`}

`;