import React, { FC } from 'react'
import {allTheSlugs} from "../../utils/utils"
import { Wrapper,SlugsContainer,Title } from './styled';
import Slug from '../Slug/Slug'

const allSlugs:FC = () => {
    return (
        <Wrapper>
            <Title>Get Hourly Prices</Title>
            <SlugsContainer>
                {allTheSlugs.map((slug,index) => <Slug key={index} slug={slug}/>)}
            </SlugsContainer>
        </Wrapper>
    )
}

export default allSlugs;
