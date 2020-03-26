import React from 'react';

export default (props) => {
    const list = props.list || [];
    
    return (
        <div>
            <h1>{`${props.categoryName.toUpperCase()} CATEGORY`}</h1>
        </div>
    );
}
