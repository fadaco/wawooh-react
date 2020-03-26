import React from "react";
import styled from "styled-components";
import Button from "../../ui/Button";
import Image from 'react-shimmer';
import BlackLoader from "../../../assets/gif/Black_Loader.gif";
import {COLOR_PICTURE, THUMBNAIL_PRODUCT} from "../../../shared/Methods";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addToCart } from "../../../store/actions/CartAction";

const COLOR = styled.div`
  display: flex;
  align-items: center;
  
  div {
    width: 25px;
    height: 25px;
    background-color: whitesmoke;
    border-radius: 50%;
    margin-right: 5px;
    cursor: pointer;
  }
`;
const SIZE = styled.div`
  display: flex;
  div{
      min-width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid grey;
      padding: 0 2px;
      color: grey; 
      margin-right: 5px;
      font-size: 12px;
      cursor: pointer;
  }
`;

class QuickBuyModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedColor: {},
            sizeList: [],
            sizeId: null,
            sizeName: '',
            picture: '',
            errorMessage: ''
        }
    }

    componentDidMount() {
        this.onColorChange(0);
        console.log(this.props.data.data.data);
    }

    onColorChange(index) {
        this.setState({
            ...this.state,
            selectedColor: this.props.data.data.data.productColorStyleDTOS[index],
            sizeList: this.props.data.data.data.productColorStyleDTOS[index].productSizes,
            picture: this.props.data.data.data.productColorStyleDTOS[index].productPictureDTOS[0].picture
        })
    }


    checkout() {
        this.setErrorMessage('');
        if (!this.state.sizeId) {
            this.setErrorMessage('Pick a size');
            return;
        }
        const body = this.setBody();
        this.props.addToCart(body, this.props.history);
    }

    setBody() {
        const item = this.props.data.data.data;
        return {
            amount: item.amount,
            artWorkPictureId: null,
            designerId: item.designerId,
            designerName: item.designerName,
            productColorStyleId: this.state.selectedColor.id,
            productId: item.id,
            productSizeId: this.state.sizeId,
            quantity: "1",
            slashedPrice: item.slashedPrice,
            size: this.state.sizeName
        };
    }

    setErrorMessage(message) {
        this.setState({
            ...this.state,
            errorMessage: message
        });
    }

    onSelectSize(sizeId, sizeName) {
        this.setState({
            ...this.state,
            sizeId, sizeName
        });
    }

    render() {
        const { data } = this.props;
        const item = data.data.data;

        const selected = {
            border: '1px solid var(--primary-color)',
            padding: 1
        };
        const sizeStyle = {borderColor: 'var(--primary-color)'};

        return (
            <div>
                <div style={{ display: "flex" }}>
                    <div style={{ width: "50%" }}>
                        <div>
                            <h5 style={{marginBottom: 5}}>Select a color</h5>
                            <COLOR>
                                {
                                    item.productColorStyleDTOS.map((item, index) => (
                                        <div
                                            key={item.id}
                                            style={this.state.selectedColor.id === item.id ? selected : null}
                                            onClick={() => this.onColorChange(index)}
                                        >
                                            <img
                                                style={{height: '100%', width: '100%', borderRadius: '50%'}}
                                                src={COLOR_PICTURE(item.colourPicture)} alt={'colorimage'}
                                            />
                                        </div>
                                    ))
                                }
                            </COLOR>
                        </div>
                        <div>
                            <h5 style={{marginBottom: 5}}>Pick a size</h5>
                            <SIZE>
                                {
                                    this.state.sizeList.map((item) => (
                                        <div
                                            key={item.id}
                                            style={this.state.sizeId === item.id ? sizeStyle : null}
                                            onClick={() => this.onSelectSize(item.id, item.name)}
                                        >
                                            {item.name}</div>
                                    ))
                                }
                            </SIZE>
                        </div>
                    </div>
                    <div style={{ width: "50%" }}>
                        <div style={imageDiv}>
                            <Image
                                src={THUMBNAIL_PRODUCT(this.state.picture)}
                                height={230}
                                style={{objectFit: 'contain'}}
                                fallback={<img src={BlackLoader} height={40} width={40} alt={'loader'}/>}
                            />
                        </div>
                    </div>
                </div>
                <br />
                <div>

                    <div style={{fontSize: 12, color: 'red'}}>{this.state.errorMessage}</div>
                    <Button
                        onClick={this.checkout.bind(this)}
                        label="CHECKOUT"
                        width="100%"
                        bgColor="black"
                        textColor="white"
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => state.product;

const stateAction = {
    addToCart
};

export default connect(mapStateToProps, stateAction)(withRouter(QuickBuyModal));

const imageDiv = {
    border: '1px solid grey',
    width: '100%',
    height: 230,
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center'
};
