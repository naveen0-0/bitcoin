import React,{ FC } from 'react'
import { Wrapper,InnerWrapper,Name,Price } from './styled'
import { Link } from 'react-router-dom'

interface Props{
    crypto:{
        id:string,
        name:string,
        slug:string,
        symbol:string,
        metrics:{
            market_data:{
                price_usd:number
            },
            all_time_high:{
                price:number,
                days_since:number
            },
            developer_activity:{
                commits_last_1_year: number,
                commits_last_3_months: number,
                lines_added_last_1_year: number,
                lines_added_last_3_months: number,
                lines_deleted_last_1_year: number,
                lines_deleted_last_3_months: number,
                stars: number,
                watchers: number,
            }
        },
        profile:{}
    }
}

const Crypto:FC<Props> = ({crypto}) => {
    return (
        <Wrapper>
            <Link to={`/crypto/${crypto.slug}`}>
                <InnerWrapper>
                    <Name>{crypto.name}</Name>
                    <Price>${crypto.metrics.market_data.price_usd.toFixed(2)}</Price>
                </InnerWrapper>
            </Link>
        </Wrapper>
    )
}

export default Crypto;
