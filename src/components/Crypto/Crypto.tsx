import React,{ FC, useState } from 'react';
import { Wrapper,InnerWrapper,Name,Price,DeveloperDetailsContainer,DeveloperDetails,AllTimeHigh,Stars,Watchers,Icon,BigWrapper } from './styled';
import { Link } from 'react-router-dom';
import { ArrowDropDownCircle,ArrowDropUpOutlined } from '@material-ui/icons';

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

    const [showModal,setShowModal] = useState<boolean | null>(false);
    
    return (
        <BigWrapper>
            <Wrapper>
                <Link to={`/crypto/${crypto.slug}`}>
                    <InnerWrapper>
                        <Name>{crypto.name}</Name>
                        <Price>${crypto.metrics.market_data.price_usd.toFixed(2)}</Price>
                    </InnerWrapper>
                </Link>
            </Wrapper>

            <DeveloperDetailsContainer>
                <Icon>{showModal?<ArrowDropUpOutlined onClick={()=>setShowModal(!showModal)} fontSize="small" color="primary"/>: <ArrowDropDownCircle onClick={()=>setShowModal(!showModal)} fontSize="small" color="primary"/>}</Icon>
                <DeveloperDetails show={showModal}>
                    <AllTimeHigh> Highest {crypto.metrics.all_time_high.price.toFixed(2)}$ Reached {crypto.metrics.all_time_high.days_since} days ago.</AllTimeHigh>
                    <Stars>Github Stars : {crypto.metrics.developer_activity.stars}</Stars>
                    <Watchers> Github Watchers : {crypto.metrics.developer_activity.watchers}</Watchers>
                </DeveloperDetails>
            </DeveloperDetailsContainer>
        </BigWrapper>
    )
}

export default Crypto;