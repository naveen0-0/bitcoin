import React,{ FC } from 'react';
import { Wrapper } from './styled';
import { GraphicEq } from '@material-ui/icons';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom"


// Or Create your Own theme:
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#ffa600"
    }
  }
});


const SideBar:FC = () => {
    return (
        <Wrapper>
            <MuiThemeProvider theme={theme}>
                <Link to="/daily"><GraphicEq color="secondary"/></Link>
            </MuiThemeProvider>
        </Wrapper>
    )
}

export default SideBar;