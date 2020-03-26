import React from 'react';
import Skeleton from "react-loading-skeleton";

const styles = {
  mainDiv: {
      backgroundColor: 'white',
      padding: 10,
      marginBottom: 15
  }
};

export default () => (
    <div style={styles.mainDiv}>
        <Skeleton height={310} />
        <div style={{height: 10}}/>
        <Skeleton height={20} />
        <div style={{height: 10}}/>
        <Skeleton height={20} width={'70%'} />
    </div>
)