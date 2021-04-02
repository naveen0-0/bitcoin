import React,{ useState,useEffect } from 'react';
import Axios from 'axios';
import { 
  Wrapper,
  ErrorComponent,
  ErrorText,
  URL,
  Title,
  Description,
  Author,
  PublishedAt,
  Loading
 } from './styled';
import { Error } from '@material-ui/icons';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      minHeight: 200,
      width: "90vw",
      margin: "auto",
      backgroundColor:"#d6d6d6"
    },
    control: {
      padding: theme.spacing(2)
    }
  })
);

interface NewsType {
    id:string;
    title:string;
    content:string;
    published_at:string;
    author:{
        name:string
    };
    url:string
}

const News = ({slug}) => {
    
    const classes = useStyles();
    const [news,setNews] = useState<any>(null);
    const [error,setError] = useState<boolean | null>(false);
    const [loading,setLoading] = useState<boolean | null>(true);


    useEffect(() => {
        let source = Axios.CancelToken.source();
    
        const loadData = () => {
            Axios.get(`https://data.messari.io/api/v1/news/${slug}?as-markdown`, { cancelToken: source.token })
                .then(response => {console.log(response.data.data); setNews(response.data.data);setError(false);setLoading(false); })
                .catch(error => {
                    if (Axios.isCancel(error)) {
                      } else {
                          setError(true);setLoading(false);
                      }
                })
        };

        loadData()
    
        return () => {
          source.cancel();
        };
      }, []);


      if(loading) return <Loading>Loading....</Loading>

      if(error) return <Wrapper>
          <ErrorComponent>
              <Error color="secondary"/> 
              <ErrorText>SomeThing Went Wrong, Refresh</ErrorText>
          </ErrorComponent>
      </Wrapper>

      if(news === null ) return <Loading>No news about it Today</Loading>

        return (
            <Grid container justify="center" spacing={2} className={classes.gridC}>
                {news.map((article:NewsType,value:number) => (
                    <Grid key={value} item>
                        <Paper className={classes.paper}>
                            <URL href={article.url} target="_blank">
                                <Title>{article.title}</Title>
                                <Description>{article.content.substring(0,100)}....</Description>
                                <Author>{article.author.name}</Author>
                                <PublishedAt>{new Date(article.published_at).toLocaleDateString()}</PublishedAt>
                            </URL>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        );
}

export default News
