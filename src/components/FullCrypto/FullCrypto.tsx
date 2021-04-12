import React,{ FC, useEffect,useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Axios from 'axios';
import { 
    Wrapper,Loading,ErrorComponent,ErrorText, Head,Details,Summary,SummaryDescription,Link,LinksContainer,RoadMapBox,RoadMapBoxTitle,RoadMapBoxDetails,RoadMapBoxTime,IndividualContributor,IndividualContributorName,IndividualContributorTitle,IndividualContributorURL,IndividualContributorImage,IndividualContributorDescription,EmptyImage
 } from './styled';
import { Error } from '@material-ui/icons';
import { LinearProgress } from '@material-ui/core';
import ReactMD from 'react-markdown';
import gfm from 'remark-gfm';

interface FullCryptoProps extends RouteComponentProps<{cryptoslug:string}>{}

const FullCrypto:FC<FullCryptoProps> = ({match}) => {
    
    const [crypto,setCrypto] = useState<any>(null);
    const [error,setError] = useState<boolean | null>(false);
    const [loading,setLoading] = useState<boolean | null>(true);


    useEffect(() => {
        let source = Axios.CancelToken.source();
        const loadData = () => {
            Axios.get(`https://data.messari.io/api/v2/assets/${match.params.cryptoslug}/profile?as-markdown`, { cancelToken: source.token })
                .then(response => {
                    console.log(response.data.data)
                    setCrypto(response.data.data);setError(false);setLoading(false); 
                })
                .catch(error => {
                    if (Axios.isCancel(error)) {
                        console.log("This is an Axios Error")
                      } else {
                          setError(true);setLoading(false);
                      }
                })
        };
        loadData();
        return () => {
          source.cancel();
        };
      }, []);


      if(loading) return <Loading><LinearProgress color="secondary"/></Loading>
      if(error) return <Wrapper>
          <ErrorComponent>
              <Error color="secondary"/> 
              <ErrorText>SomeThing Went Wrong, Refresh</ErrorText>
          </ErrorComponent>
      </Wrapper>


    return (
        <Wrapper>
            <Head>{crypto.name} ({crypto.symbol})</Head>

            <LinksContainer>
            {crypto.profile.general.overview.official_links.map((linkObj:any,index:number)=><Link href={linkObj.link} key={index} target="_blank">{linkObj.name}</Link>)}
            </LinksContainer>

            <Details>
                <Summary>Background</Summary>
                <SummaryDescription> <ReactMD plugins={[gfm]} children={crypto.profile.general.background.background_details}/></SummaryDescription>
            </Details>

            <Details>
                <Summary>Overview</Summary>
                <SummaryDescription> <ReactMD plugins={[gfm]} children={crypto.profile.general.overview.project_details}/></SummaryDescription>
            </Details>

            <Details>
                <Summary>Roadmap</Summary>
                <SummaryDescription> 
                    {crypto.profile.general.roadmap.map((roadmapbox:any,index:number) => <RoadMapBox key={index}>
                        <RoadMapBoxTitle>{roadmapbox.title}</RoadMapBoxTitle>
                        <RoadMapBoxDetails>{roadmapbox.details}</RoadMapBoxDetails>
                        <RoadMapBoxTime>{new Date(roadmapbox.date).toLocaleDateString()}</RoadMapBoxTime>
                    </RoadMapBox>)}
                </SummaryDescription>
            </Details>

            <Details>
                <Summary>Regulation</Summary>
                <SummaryDescription> <ReactMD plugins={[gfm]} children={crypto.profile.general.regulation.regulatory_details}/></SummaryDescription>
            </Details>

            <Details>
                <Summary>Contributors</Summary>
                <SummaryDescription>
                    <Details>
                        <Summary>Individuals</Summary>
                        <SummaryDescription>
                            {crypto.profile.contributors.individuals.map((cont:any,index:number) => <IndividualContributor key={index}>
                                <IndividualContributorURL>
                                    {cont.avatar_url?
                                    <IndividualContributorImage src={cont.avatar_url} alt="My ProfilePIC"/>
                                     :<EmptyImage/>}
                                </IndividualContributorURL>
                                <IndividualContributorName>{`${cont.first_name} ${cont.last_name}`}</IndividualContributorName>
                                <IndividualContributorTitle>{cont.title}</IndividualContributorTitle>
                                <IndividualContributorDescription>{cont.description}</IndividualContributorDescription>
                            </IndividualContributor>)}
                        </SummaryDescription>
                    </Details>
                    <Details>
                        <Summary>Organizations</Summary>
                        <SummaryDescription>
                            {crypto.profile.contributors.organizations.map((cont:any,index:number) => <IndividualContributor key={index}>
                                <IndividualContributorURL>
                                    {cont.logo?
                                    <IndividualContributorImage src={cont.logo} alt="My ProfilePIC"/>
                                     :<EmptyImage/>}
                                </IndividualContributorURL>
                                <IndividualContributorName>{cont.name}</IndividualContributorName>
                                <IndividualContributorDescription>{cont.description}</IndividualContributorDescription>
                            </IndividualContributor>)}
                        </SummaryDescription>
                    </Details>
                </SummaryDescription>
            </Details>
            

        </Wrapper>
    )
}

export default FullCrypto;
