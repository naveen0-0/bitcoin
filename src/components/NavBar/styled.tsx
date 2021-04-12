import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    background-color:#292828;
    padding:10px;
`;

export const Navtitle = styled.div`
  font-size: 2em;
  color: palevioletred;
  min-width:100px;
  max-width:300px;  
  padding:0rem 1.2rem;
  text-align:center;
  font-weight:bold;
  color:#dca714;
  font-family:Fira Code
  `;
  
export const SearchComponent = styled.input`
/* flex:1; */
width:50%;
margin:auto;
outline:none;
border:none;
padding:0.6rem 1rem;
font-family:"Fira Code Medium";
color:#dca714;
border-radius:99999999px;
`;
