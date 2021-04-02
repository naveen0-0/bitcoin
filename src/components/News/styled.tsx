import styled from 'styled-components';

export const Wrapper = styled.div`
background:linear-gradient(to top left,#464747,#363737);
`;

export const ErrorComponent = styled.div`
background:transparent;
display:flex;
margin: 0px auto
`;


export const ErrorText = styled.div`
color:#ececec;
font-size:1.2rem;
font-family:Fira Code;
font-weight:bold;
`;


export const URL = styled.a`
display:block;
height:100%;
width:100%;
text-decoration:none;
color:black;
`;


export const Title = styled.div`
text-align:center;
font-size:1.8rem;
font-family:"Calibri";
color:#0071a5;
padding:10px;
font-weight:bold;
`;


export const Description = styled.div`
text-align:center;
font-size:1.3rem;
font-family:"Calibri";
padding:10px;
`;

export const Author = styled.div`
text-align:right;
font-size:1rem;
font-weight:bold;
padding:10px 20px 0px 20px;
`;

export const PublishedAt = styled.div`
text-align:right;
font-size:0.8rem;
font-weight:bold;
padding:10px 20px 0px 20px
`;


export const Loading = styled.div`
background-color:#d6d6d6;
padding:10px;
text-align:center;
font-size:2rem;
font-family:"Fira Code"
`;