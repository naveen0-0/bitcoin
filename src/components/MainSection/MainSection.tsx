import React,{FC,useEffect,useState} from 'react';
import { Wrapper,Head,GridContainer,Loading,ErrorComponent,ErrorText } from './styled';
import Axios from 'axios';
import Crypto from '../Crypto/Crypto';
import { LinearProgress } from '@material-ui/core'
import { Error } from '@material-ui/icons'

const MainSection:FC = () => {

    const [cryptos,setCryptos] = useState<any>(null);
    const [error,setError] = useState<boolean | null>(false);
    const [loading,setLoading] = useState<boolean | null>(true);

    useEffect(() => {
        let source = Axios.CancelToken.source();
    
        const loadData = () => {
            Axios.get("https://data.messari.io/api/v2/assets?with-metrics&with-profiles", { cancelToken: source.token })
                .then(response => { setCryptos(response.data.data);setError(false);setLoading(false); })
                .catch(error => {
                    if (Axios.isCancel(error)) {
                      } else {
                          setError(true);setLoading(false);
                      }
                })
        };

        if(!error){
            setInterval(()=>{
                loadData();
            },2000)
        }
    
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
            <Head>Popular Crypto</Head>
            <GridContainer>
            {cryptos.map((crypto: any,index:number) => <Crypto key={index} crypto={crypto}/>)}
            </GridContainer>
        </Wrapper>
    )
}

export default MainSection;

