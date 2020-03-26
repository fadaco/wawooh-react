import React from 'react';
import Skeleton from "react-loading-skeleton";

export default () => (
    <div>
        <Skeleton width={'100%'} height={310}/>
        <div>
            <Skeleton width={100}/>
        </div>
    </div>
)