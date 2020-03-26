import React from 'react';
import ProductCard from '../../products/ProductCard';
import ShimmerLoader from '../../ui/ShimmerLoader/mobile';

export default (props) => {
    const data = props.list || [];

    return (
        <div>
            {
                props.loading
                ? [1,2,3].map((item) => <ShimmerLoader key={item}/>)
                : data.map((item, index) => (
                    <ProductCard
                        key={item.id}
                        data={item}
                    />
                ))
            }
        </div>
    )
}

/*

 */