import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { allTheSlugs } from '../../utils/utils';
import News from '../News/News';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:"#454646",
    minHeight:"100vh",
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {setValue(newValue)};

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          {allTheSlugs.map((slug,index) => <Tab label={slug} {...a11yProps(index)} key={index}/>)}
        </Tabs>
      </AppBar>
      {allTheSlugs.map((slug,index)=> <TabPanel value={value} index={index} key={index}>{<News slug={slug}/>} </TabPanel>)}
    </div>
  );
}