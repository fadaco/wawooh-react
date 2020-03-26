import React from "react";
import { connect } from "react-redux";
import Desktop from "./desktop";
import Mobile from "./mobile";
import { GET_TOKEN, GET_CART, SAVE_CART } from "../../../shared/Storage";
import { DesktopContainer, MobileContainer } from "../../ui/Responsiveness";
import {
  addToCart,
  fetchCart,
  emptyCart,
  removeCartItem
} from "../../../store/actions/CartAction";
import {withRouter} from 'react-router-dom';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    // this.toggleDelete = this.toggleDelete.bind(this);
    this.removeAllItemsFromCart = this.removeAllItemsFromCart.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  // toggleDelete(params) {
  //     if(params === this.state.showDelete){
  //         this.setState({
  //             ...this.state,
  //             showDelete: ''
  //         })
  //     }else {
  //         this.setState({
  //             ...this.state,
  //             showDelete: params
  //         })
  //     }
  // }

  componentWillMount() {
    this.props.fetchCart();
  }

  removeAllItemsFromCart() {
    if (window.confirm("Delete All Cart Items?")) {
      this.props.emptyCart();
    }
  }

  removeItem(id, params) {
    if (GET_TOKEN()) {
      this.props.removeCartItem(id, this.props.history);
    } else {
      this.props.cart.splice(params, 0);
      let newCart = GET_CART().splice(params, 0);
      SAVE_CART(newCart);
      console.log(this.props.cart);
      console.log(GET_CART());
    }
  }

  addItemToCart = () => {
    let data = {
      amount: 5790,
      artWorkPictureId: null,
      color: undefined,
      designerId: "661",
      designerName: "BEEDY WEARS AND ACCESSORIES",
      expiryDate: "",
      materialLocation: null,
      materialPickupDate: "",
      materialPictureId: null,
      materialStatus: "N",
      productColorStyleId: "2021",
      productId: "1531",
      productSizeId: "8861",
      quantity: "1",
      size: "XL",
      slashedPrice: "0"
    };
    this.props.addToCart(data);
  };

  render() {
    return (
      <div>
        <DesktopContainer>
          <Desktop
            total={this.props.totalCart}
            click={this.addItemToCart}
            cart={this.props.cart}
            clearCart={this.removeAllItemsFromCart}
            removeCartItem={(id, params) => this.removeItem(id, params)}
          />
        </DesktopContainer>

        <MobileContainer>
          <Mobile
            total={this.props.totalCart}
            click={this.addItemToCart}
            cart={this.props.cart}
            clearCart={this.removeAllItemsFromCart}
            removeCartItem={id => this.removeItem(id)}
          />
        </MobileContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart,
  totalCart: state.cart.cartTotal
});

const storeActions = {
  addToCart,
  fetchCart,
  emptyCart,
  removeCartItem
};

export default connect(
  mapStateToProps,
  storeActions
)(withRouter(Cart));
