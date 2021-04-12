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


export const Details = styled.details`
width:90%;
margin:auto;
outline:none;
font-family:"Hack Regular";
color:#bdbdbd;
text-decoration:none;
word-break:break-all;
padding:20px 0px 0px 0px;
cursor:pointer;
`;

export const Summary = styled.summary`
outline:none;
font-family:"Hack Regular";
color:orange;
font-weight:bold;
font-size:1rem;
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
background-color:#252525;
margin:10px auto;
padding:20px;
border-radius:5px;

`;
export const RoadMapBoxTitle = styled.div`
font-size:1.2rem;
font-weight:bold;
`;
export const RoadMapBoxDetails = styled.div`
margin:10px auto;
font-size:.8rem;
font-weight:bold;
`;
export const RoadMapBoxTime = styled.div`
color:cornflowerblue;
font-size:.8rem;
text-align:right;
font-weight:bold;
`;

export const IndividualContributor = styled.div`
background-color:#2e2b2b;
margin:10px;
border-radius:5px;
@media screen and (max-width:500px){
    text-align:center;
}
`;
export const IndividualContributorURL = styled.div`
padding:20px;
`;
export const IndividualContributorImage = styled.img`
width:150px;
height:150px;
object-fit:cover;
border-radius:50%;
@media screen and (max-width:500px){
    display:block;
    margin:auto;
}
`;
export const IndividualContributorName = styled.div`
color:cornflowerblue;
font-weight:bold;
padding:10px;
`;
export const IndividualContributorTitle = styled.div`
font-weight:bold;
padding:10px;
font-size:0.8rem;
`;

export const IndividualContributorDescription = styled.div`
padding:10px;
font-weight:bold;
font-size:0.8rem;
`;


export const EmptyImage = styled.div`
width:150px;
height:150px;
background-color:black;
border-radius:50%;
@media screen and (max-width:500px){
    display:block;
    margin:auto;
}
`;

export const Exploit = styled.div`
background-color:#2e2b2b;
margin:10px;
border-radius:5px;
padding:20px;
`;
export const ExploitTitle = styled.div`
font-size:1.2rem;
font-weight:bold;
`;

export const ExploitDate = styled.div`
text-align:right;
color:cornflowerblue;
font-weight:bold;
font-size:1rem;
`;

export const ExploitType = styled.div`
font-weight:bold;
font-size:0.8rem;
color:cornflowerblue;
`;

export const ExploitDetails= styled.div`
padding:10px;
font-weight:bold;
font-size:0.8rem;
`;

