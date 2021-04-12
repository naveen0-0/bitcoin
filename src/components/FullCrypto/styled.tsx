import styled from 'styled-components';

export const Wrapper = styled.div`
background:linear-gradient(to top left,#464747,#363737);
width:100%;
margin: 0px auto;
min-height:100vh;
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

export const Head = styled.div`
text-align:center;
padding:10px;
font-size:1.4rem;
font-family:"Hack Regular";
font-weight:bold;
color:orange;
`;

export const SubHead = styled.div`
text-align:center;
padding:10px;
font-size:1rem;
font-family:"Hack Regular";
color:cornflowerblue;
font-weight:bold;
`;

export const Details = styled.details`
width:90%;
margin:auto;
outline:none;
font-family:"Hack Regular";
color:#bdbdbd;
text-decoration:none;
word-break:break-all;
padding:20px 0px 0px 0px;
`;

export const Summary = styled.summary`
outline:none;
font-family:"Hack Regular";
color:orange;
font-weight:bold;
font-size:1.2rem;
text-decoration:none;
`;

export const SummaryDescription = styled.div`
outline:none;
text-decoration:none;
font-family:"Hack Regular";
`;

export const LinksContainer = styled.div`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(100px,1fr));
gap:20px;
width:90%;
margin:auto;
padding:20px;
`;

export const Link = styled.a`
text-decoration:none;
font-family:"Hack Regular";
text-align:center;
color:#b4b4b4;
background-color:#252525;
padding:4px 8px;
border-radius:99999px;
font-weight:bold;
font-size:0.8rem
`;


export const RoadMapBox = styled.div`

`;
export const RoadMapBoxTitle = styled.div`

`;
export const RoadMapBoxDetails = styled.div`

`;
export const RoadMapBoxTime = styled.div`

`;