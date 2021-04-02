import React, { FC } from 'react'
import { Wrapper } from './styled';
import { Link } from 'react-router-dom'

const Slug:FC<{slug:string}> = ({slug}) => {
    return (
        <Link to={`/daily/${slug}`} style={{textDecoration:"none"}}>
            <Wrapper>
                {slug}
            </Wrapper>
        </Link>
    )
}

export default Slug
