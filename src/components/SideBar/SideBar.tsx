import React,{ FC } from 'react';
import { Wrapper } from './styled';
import { Home,Person,ContactMail } from '@material-ui/icons';

const SideBar:FC = () => {
    return (
        <Wrapper>
            <Home color="primary"/>
            <Home color="primary"/>
            <Home color="primary"/>
            <Person color="primary"/>
            <ContactMail color="primary"/>
        </Wrapper>
    )
}

export default SideBar