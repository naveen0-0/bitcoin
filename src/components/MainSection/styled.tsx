import styled from 'styled-components';

export const Wrapper = styled.div`
background:linear-gradient(to top left,#464747,#363737);
width:100%;
margin: 0px auto;
padding:20px;
`;

export const GridContainer = styled.div`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:20px;
`;


export const Head = styled.div`
font-size:2rem;
color:#bbbbbb;
padding:10px;
text-align:center;
font-family:"Fira Code";
font-weight:bold;
`;


export const Loading = styled.div`
background:linear-gradient(to top left,#464747,#363737);
width:100%
`;

export const ErrorComponent = styled.div`
background:transparent;
width:100%;
display:flex;
margin: 0px auto
`;


export const ErrorText = styled.div`
color:#ececec;
font-size:1.2rem;
font-family:Fira Code;
font-weight:bold;
`;