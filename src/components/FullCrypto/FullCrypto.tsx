import React,{ FC, useEffect,useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Axios from 'axios';
import { Wrapper,Loading,ErrorComponent,ErrorText} from './styled';
import { Error } from '@material-ui/icons'
import { LinearProgress } from '@material-ui/core'


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

        // if(!error){
            // setInterval(()=>{
                loadData();
            // },2000)
        // }
    
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
        <div>
            Fullcrypto
        </div>
    )
}

export default FullCrypto
