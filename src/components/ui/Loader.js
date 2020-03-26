import React from 'react';
import BlackLoader from '../../assets/gif/Black_Loader.gif';

const styles = {
    loadingContainer: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default () => (
    <div style={styles.loadingContainer}>
        <img 
            style={{margin: '10px auto', display: 'block'}}
            src={BlackLoader}
            height={70}
            width={70}
            alt="loader"
        />
    </div>
)