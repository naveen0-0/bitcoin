import styled from 'styled-components';

export const Wrapper = styled.div`
min-height:100vh;
background-color:#373838;
`;

export const Title = styled.div`
font-family:"Fira Code";
font-size:1.8rem;
text-align:center;
padding:20px;
color:cornflowerblue;
font-weight:bold;
`;

export const SlugsContainer = styled.div`
display:grid;
grid-template-columns:repeat(auto-fit, minmax(200px,1fr));
gap:25px;
width:90%;
margin: 30px auto;
`;