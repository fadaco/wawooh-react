import React from 'react';
import Skeleton from "react-loading-skeleton";

export default () => (
    <div style={{backgroundColor: 'white', padding: 30}}>
        <div style={{display: 'flex'}}>
            <div>
                <div style={{marginBottom: 10}}><Skeleton height={100} width={100}/></div>
                <div style={{marginBottom: 10}}><Skeleton height={100} width={100}/></div>
                <div style={{marginBottom: 10}}><Skeleton height={100} width={100}/></div>
                <div style={{marginBottom: 10}}><Skeleton height={100} width={100}/></div>
                <div style={{marginBottom: 10}}><Skeleton height={100} width={100}/></div>
            </div>

            <div style={{flex: 1, padding: '10px 20px', height: 500}}>
                <Skeleton height={'100%'} width={'100%'}/>
            </div>

            <div>
                <div style={{marginBottom: 10}}><Skeleton height={20} width={400}/></div>
                <div style={{marginBottom: 10}}><Skeleton height={20} width={300}/></div>
                <div style={{marginBottom: 10}}><Skeleton height={20} width={200}/></div>
            </div>
        </div>

        <div style={{marginBottom: 10}}><Skeleton height={20} width={'80%'}/></div>
        <div style={{marginBottom: 10}}><Skeleton height={20} width={'60%'}/></div>
        <div style={{marginBottom: 10}}><Skeleton height={20} width={'40%'}/></div>
    </div>
);