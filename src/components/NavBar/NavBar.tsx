import * as React from 'react';
import { FC } from 'react';
import {Navtitle,Wrapper} from './styled';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom'

const NavBar:FC = () => {
    return (
        <Wrapper>
            <Link to="/" style={{textDecoration:"none"}}><Navtitle>Crypto</Navtitle></Link>
            <Link to="/news" style={{textDecoration:"none"}}><Button color="primary" size="small" variant="contained">News</Button></Link>
        </Wrapper>
    )
}

export default NavBar;