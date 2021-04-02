import React, { FC, useEffect, useState  } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface DailyDataProps extends RouteComponentProps{}

const DailyData:FC<DailyDataProps> = ({match}) => {
    return (
        <div>
            Daily Data
        </div>
    )
}

export default DailyData
