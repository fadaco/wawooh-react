import React from 'react'
import styled from 'styled-components'
import { NairaSign } from '../../../config'
import WishlistImg from '../../../assets/svg/wishlistline.svg'
import {THUMBNAIL_PRODUCT} from "../../../shared/Methods";
import { withRouter } from "react-router-dom";

const Card = styled.div`
    height: 300px;
    width: 230px;
    display: flex;
    flex-direction: column;

    .productImg {
        height: 80%;
        div{
            height: 100%;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover
            }
        }
        .heartIcon{
            position: absolute;
            right: 8px;
            top: 8px;
            z-index: 10;
            border-radius: 50%;
            background-color: white;
            height: 18px;
            width: 18px;
            padding: 8px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .productInfo{
        height: 20%;
        .productDetails {
            display: flex;
            justify-content: space-between;
            padding: 0px 5px;
            
            p{
                margin: 2px 0px;
            }
            div:nth-child(2){
                
            }
        }
    }
    .bold {
        font-weight: bold;
        font-size: 12px;
    }
    
`;

export default withRouter((props) => {
    const item = props.data;

    const onProductSelect = (item) => {
        console.log('click item', item);
        const itemName = item.name.replace(/ /g, '-');
        props.history.push(`/product/${itemName}-${item.id}`);
    };

    return (
        <Card onClick={() => onProductSelect(item)}>
            <div className="productImg">
                <div>
                    <img src={THUMBNAIL_PRODUCT(item.productColorStyleDTOS[0].productPictureDTOS[0].picture)} alt={item.name} />
                </div>
                <div className="heartIcon">
                    <img src={WishlistImg} alt="WishListImg"/>
                </div>
            </div>
            <div className="productInfo">
                <div className="productDetails">
                    <div>
                        <p className="bold">{item.name}</p>
                        <p style={{fontSize: 12}}>{item.designerName.toUpperCase()}</p>
                    </div>
                    <div className="bold">
                        <p>{NairaSign} <span> {item.amount}</span></p>
                    </div>
                </div>
            </div>
        </Card>
    )
})