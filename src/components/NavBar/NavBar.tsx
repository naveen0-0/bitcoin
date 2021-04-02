import * as React from 'react';
import { FC } from 'react';
import {Navtitle,Wrapper,SearchComponent} from './styled';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom'

const NavBar:FC = () => {
    return (
        <Wrapper>
            <Link to="/" style={{textDecoration:"none"}}><Navtitle>Crypto</Navtitle></Link>
            {/* <SearchComponent type="text" placeholder="Search for a Crypto" style={{ backgroundColor:"#364547"}}/> */}
            <Link to="/news" style={{textDecoration:"none"}}><Button color="primary" size="small" variant="contained">News</Button></Link>
        </Wrapper>
    )
}

export default NavBar;