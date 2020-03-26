import React from 'react';
import ProductCard from '../../products/ProductCard';
import styled from "styled-components";
import ShimmerLoader from '../../ui/ShimmerLoader/Desktop';
// import {THUMBNAIL_PRODUCT, numberWithCommas} from '../../../shared/Methods';
// import Filter from '../filter'

const ProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 30px 30px 10px 30px;
`
const styles = {
    width: '25%'
}
export default (props) => {
    const data = props.list || [];
    return (
        <div>
            {/*<Filter/>*/}
            <ProductList>
            {
                props.loading
                ? [1,2,3,4,5,6,7,8].map((item, index) => (
                    <ShimmerLoader key={index} />
                ))
                : data.map((item) => (
                    <div style = {styles} key={item.id}>
                        <ProductCard
                            data={item}
                        />
                    </div>
                ))
            }
            
            </ProductList>
            
        </div>
        
    )
}