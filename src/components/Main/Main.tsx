import React,{FC} from 'react';
import SideBar from '../SideBar/SideBar';
import MainSection from '../MainSection/MainSection';
import {Wrapper} from './styled'

const Main:FC = () => {
    return (
        <Wrapper>
            <SideBar/>
            <MainSection/>
        </Wrapper>
    )
}

export default Main