import styled from 'styled-components';

export const Wrapper = styled.div`
background-color:#1d1b1b;
border-radius:5px;
position:relative;
min-height:120px;
cursor: pointer;
`;

export const InnerWrapper = styled.div`
font-family:Fira Code;
text-align:center;
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
height:100%;
width:100%;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
`;


export const Name = styled.div`
font-size:1.8rem;
font-weight:bold;
color:#b9b9b9
`;

export const Price = styled.div`
font-size:1.1rem;
font-weight:bold;
color:#a8a8a8;
`;