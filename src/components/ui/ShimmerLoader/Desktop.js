import React from 'react';
import Skeleton from 'react-loading-skeleton';

const styles = {
    container: {
        height: '395px',
        margin: 5,
        backgroundColor: 'white',
        padding: 10,
    },
    content: {
        paddingTop: 10
    }
}

export default (props) => (
    <div style={{width: '25%'}}>
        <div style={styles.container}>
            <Skeleton height={'83%'} />
            <div style={styles.content}>
                <Skeleton width={'85%'}  />
                <div />
                <Skeleton width={'75%'}  />
            </div>
        </div>
    </div>
)