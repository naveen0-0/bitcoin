import * as React from 'react';
import { FC } from 'react';
import {Navtitle,Wrapper,SearchComponent} from './styled';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom'

const NavBar:FC = () => {
    return (
        <Wrapper>
            <Navtitle>Crypto</Navtitle>
            {/* <SearchComponent type="text" placeholder="Search for a Crypto" style={{ backgroundColor:"#364547"}}/> */}
            <Link to="/news"><Button color="primary" size="small" variant="contained">News</Button></Link>
        </Wrapper>
    )
}

export default NavBar;