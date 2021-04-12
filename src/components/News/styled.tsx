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
font-size:1.5rem;
font-family:"Hack Regular";
color:#0071a5;
padding:10px;
font-weight:bold;
word-break: break-all;
`;


export const Description = styled.div`
text-align:center;
font-size:1rem;
font-family:"Hack Regular";
padding:10px;
color:whitesmoke;
word-break: break-all;
`;

export const Author = styled.div`
text-align:right;
font-size:1rem;
font-weight:bold;
padding:10px 20px 0px 20px;
font-family:"Hack Regular";
color:orange;
`;

export const PublishedAt = styled.div`
text-align:right;
font-size:0.8rem;
font-weight:bold;
padding:10px 20px 0px 20px;
font-family:"Hack Regular";
color:orange;
`;


export const Loading = styled.div`
background-color:#242020;
padding:10px;
text-align:center;
font-size:1.2rem;
font-family:"Fira Code";
color:whitesmoke
`;