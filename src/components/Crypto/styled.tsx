import styled from 'styled-components';

export const BigWrapper = styled.div`
background-color:#1d1b1b;
border-radius:5px;
cursor: pointer;
min-height:120px;
position:relative;
`;

export const Wrapper = styled.div`
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

export const DeveloperDetailsContainer = styled.div``;
export const Icon = styled.div`
position:absolute;
right:5px;
bottom:5px;
`;
export const DeveloperDetails = styled("div")<{show:boolean}>`
display:${props => props.show? "flex":"none"};
position:absolute;
top:100%;
z-index:10;
background-color:#1d1b1b;
padding:10px;
font-family:"Hack Regular";
color:whitesmoke;
min-height:120px;
flex-direction:column;
justify-content:space-around;
align-items:center;
/* border-radius:5px; */
width:calc(100%-20px);
`;
export const AllTimeHigh = styled.div`
text-align:center;
color:crimson;
`;
export const Stars = styled(AllTimeHigh)``;
export const Watchers = styled(AllTimeHigh)``;