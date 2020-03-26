import React from "react";
import { connect } from "react-redux";
import Desktop from "./desktop";
import Mobile from "./mobile";

import { DesktopContainer, MobileContainer } from "../../ui/Responsiveness";
import { guestCheckout, addOrder } from "../../../store/actions/CheckoutAction";
import {
  getUserAddress,
  getProfileInfo, updateUserInput
} from "../../../store/actions/UserAction";
import { fetchCart } from "../../../store/actions/CartAction";
import {
  getShippingFee,
  getUserShippingType
} from "../../../store/actions/ShippingAction";
import { withRouter, Redirect } from "react-router-dom";
import { GET_CART, GET_TOKEN } from "../../../shared/Storage";
import City from '../../../city.json';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCheck:'',
      region:'', 
      cityCheck: '',
      deliveryAddressId: "",
      deliveryAddressIdStatus: false,
      guestEmail: "",
      showHide: false,
      billing: false,
      addressShow: false,
      deliveryInfo: true,
      address: "",
      city: "",
      country: "",
      state: "",
      localGovt: "",
      phoneNo: "",
      firstName: "",
      lastName: "",
      postalCode: "",
      deliveryType: "",
      paymentType: "",
      billingCountry: "",
      billingFirstName: "",
      billingLastName: "",
      billingAddress: "",
      billingState: "",
      billingCity: "",
      billingCode: "",
      billingPhoneNo: "",
      viewComponent: "email",
      viewButton: "",
      editTab: false,
      editShipping: "",
      editBilling: "",
      confirmPayment: "",
      promoForm: false,
      showDeliveryType: ""
    };
  }

  componentDidMount() {
    this.props.fetchCart();
    this.props.getUserAddress();
    this.props.userAddress.forEach(item => {
      if (item.preferred === "Y") {
        this.setState(
          {
            ...this.state,
            deliveryAddressId: item.id
          },
          () => {
            let data = {
              deliveryAddressId: this.state.deliveryAddressId
            };
            this.props.getUserShippingType(data);
          }
        );
      }
    });
    if (GET_TOKEN()) {
      this.setState({
        ...this.state,
        shipping: true,
        emailTab: false
      });
    }
    this.props.getProfileInfo();
    if (this.props.userInfo.email) {
      this.setState({
        guestEmail: this.props.userInfo.email,
        viewComponent: "shipping"
      });
    }
    // console.log(this.props.userInfo.email);
  }

  selectCountry(params,val) {
    this.props.updateUserInput(params, val);
    this.setState({countryCheck: val})
  }

  selectRegion(params, val) {
    this.props.updateUserInput(params, val);
    City.forEach((item) => {
       let city = Object.keys(item)[0];
       if(city === val){
          this.setState({
               ...this.state,
            city: Object.values(item)[0]
           }, () => {
              this.props.updateUserInput('city', this.state.cityCheck);
          })
         // console.log(Object.values(item)[0]);
       }
  })
    this.setState({region: val})
}

  showPromoForm = () => {
    this.setState({ promoForm: !this.state.promoForm });
  };

  CheckoutBtn = () => {
    let myItem = [];
    if (GET_TOKEN()) {
      this.props.cart.forEach(item => {
        myItem.push({
          amount: item.price,
          artWorkPictureId: null,
          designerId: item.designerId,
          deliveryDate: null,
          deliveryStatus: 'P',
          color: "black",
          materialLocation: null,
          materialPickupDate: null,
          materialPictureId: null,
          materialStatus: null,
          measurementId: null,
          productId: item.id,
          promoCode: "",
          productColorStyleId: item.productColorStyleId,
          productSizesId: item.productSizeId,
          quantity: parseInt(item.quantity),
          size: item.size
        });
      });

      let data = {
        deliveryAddressId: Number(this.state.deliveryAddressId)
          ? Number(this.state.deliveryAddressId)
          : null,
        paymentType: this.state.paymentType,
        paidAmount: this.props.cartTotal,
        items: myItem,
        totalAmount: this.props.cartTotal + this.props.shippingFee,
        // deliveryType: this.state.deliveryType,
        deliveryType: 'STANDARD_DELIVERY',
        currency: 'USD'
      };
        console.log(data);

      this.props.addOrder(data, this.props.history, this.state.paymentType);

    } else {
      this.props.cart.forEach(item => {
        myItem.push({
          amount: item.amount,
          artWorkPictureId: 1,
          deliveryDate: null,
          deliveryStatus: null,
          color: "black",
          materialLocation: null,
          materialPickupDate: null,
          materialPictureId: null,
          materialStatus: null,
          measurementId: null,
          productId: item.id,
          promoCode: "",
          productColorStyleId: item.productColorStyleId,
          productSizesId: item.productSizeId,
          quantity: parseInt(item.quantity),
          size: item.size
        });
      });
      let data = {
        address: this.props.address,
        anonymousFlag: null,
        anonymousUser: {
          city: this.props.city,
          country: this.props.country,
          email: this.state.guestEmail,
          phoneNo: this.props.phoneNo,
          postalCode: this.props.postalCode,
          state: this.props.state,
          localGovt: "Alimosho"
        },

        deliveredDate: null,
        deliveryAddressId: 0,
        deliveryStatus: null,
        deliveryType: this.state.deliveryType,
        baDTO: {
          address: this.state.billingAddress,
          city: this.state.billingCity,
          country: this.state.billingCountry,
          localGovt: "Alimosho",
          postalCode: this.state.billingCode,
          state: this.state.billingState,
          zipCode: this.state.billingCode,
          phoneNumber: this.state.billingPhoneNo
        },

        firstName: this.props.firstName,
        items: myItem,
        lastName: this.props.lastName,
        orderDate: "string",
        paidAmount: this.props.cartTotal,
        paymentType: this.state.paymentType,
        totalAmount: this.props.cartTotal,
        userId: 0,
        zipCode: this.state.postalCode
      };
      console.log(data);

      this.props.guestCheckout(
        data,
        this.props.history,
        this.state.paymentType
      );
    }
  };

  toggleDeliveryMethod = params => {
    switch (params) {
      case "pickup":
        this.setState({ showDeliveryType: params });
        break;
      case "standard_delivery":
        this.setState({ showDeliveryType: params });
        break;
      default:
        return false;
    }
  };

  showShippingcontent = (params) => {
      if(this.state.guestEmail === ''){
          this.setState({showHide: true });
      }else if(params === 'payment') {
          if(!GET_TOKEN()) {
            console.log('ffhfhf');
             /* if ((this.props.firstName !== '') && (this.props.lastName !== '') && (this.props.country !== '')
                  && (this.props.address !== '') && (this.props.state !== '') && (this.props.city !== '') && (this.props.pickupOption)
              ) {*/
                  console.log('ffvvvhfhf');
                  this.setState({viewComponent: params});
                  this.setState({editShipping: 'payment'});

                  if (!this.state.deliveryAddressId) {
                      let data = {
                          "address": this.props.address,
                          "city": this.props.city,
                          "country": this.props.country,
                          "state": this.props.state
                      }
                      this.props.getShippingFee(data);
                      console.log(this.props.firstName);
                      console.log(this.props.lastName);
                      console.log(this.props.country);
                      console.log(this.props.address);
                      console.log(this.props.state);
                      console.log(this.props.city);
                      console.log(this.state.deliveryType);
                  }

             // }
          }else{
              this.setState({viewComponent: params});
              this.setState({editShipping: 'payment'});
          }


      }else if(params === 'billing'){
          if(this.state.paymentType !== '') {
              this.setState({viewComponent: params});
              this.setState({editBilling: 'billing'})
          }
          }else if(params === 'confirmPayment'){
          if((this.state.billingFirstName !== '') && (this.state.billingLastName !== '') && (this.state.billingCountry !== '')
              && (this.state.billingAddress !== '') && (this.state.billingState !== '')
          ){
              this.setState({viewComponent: params});
              this.setState({confirmPayment: 'confirmPayment'})
          }
      }else{
          console.log('hello shippings', params);
          this.setState({viewComponent: params});
      }
  };

  shippingAddressFee = e => {
    this.setState(
      {
        ...this.state,
        [e.target.name]: e.target.value
      },
      () => {
        let data = {
          deliveryAddressId: this.state.deliveryAddressId
        };
        this.props.getUserShippingType(data);
      }
    );
  };

  addNewAddress = () => {
    this.setState(prevState => ({
      ...this.state,
      addressShow: !prevState.addressShow
    }));
  };

  change = e => {
    console.log(e.target.name, e.target.value);
    this.setState(
      {
        ...this.state,
        [e.target.name]: e.target.value,
        showHide: false,
        deliveryInfo: e.target.value === 'PICK_UP' ? false : true
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    if (GET_TOKEN()) {
      if (this.props.cartCount < 1) {
        return <Redirect to={"/cart"} />;
      }
    } else if (GET_CART().length < 1) {
      return <Redirect to={"/cart"} />;
    }

    return (
      <div>
        <DesktopContainer>
          <Desktop
            c={this.state} 
            changeRegion={(key, val)=>{this.selectRegion(key, val)}} 
            changeCountry={(params, val)=>{this.selectCountry(params,val)}} 
            showDeliveryType={this.state.showDeliveryType}
            toggleIcon={this.state.promoForm}
            promoFormToggle={this.showPromoForm}
            toggleDeliveryMethod={params => this.toggleDeliveryMethod(params)}
            addNewAddress={this.addNewAddress}
            shippingFee={this.props.shippingFee}
            user={this.props.user}
            userAddress={this.props.userAddress}
            cartTotal={this.props.cartTotal}
            cart={this.props.cart}
            Checkout={this.CheckoutBtn}
            state={this.state}
            onChange={this.change}
            shippingAddressFee={this.shippingAddressFee}
            click={params => this.showShippingcontent(params)}
          />
        </DesktopContainer>

        <MobileContainer>
          <Mobile
            toggleIcon={this.state.promoForm}
            promoFormToggle={this.showPromoForm}
            addNewAddress={this.addNewAddress}
            shippingFee={this.props.shippingFee}
            userAddress={this.props.userAddress}
            cartTotal={this.props.cartTotal}
            cart={this.props.cart}
            Checkout={this.CheckoutBtn}
            state={this.state}
            onChange={this.change}
            shippingAddressFee={this.shippingAddressFee}
            click={params => this.showShippingcontent(params)}
          />
        </MobileContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.user,
  checkout: state.checkout.checkout,
  userAddress: state.user.userAddressList,
  cart: state.cart.cart,
  cartCount: state.cart.cartCount,
  cartTotal: state.cart.cartTotal,
  shippingFee: state.shippingFee.shippingFee,
  user: state.user.userInfo
});

const storeActions = {
  guestCheckout,
  fetchCart,
  getShippingFee,
  getUserAddress,
  getUserShippingType,
  addOrder,
  getProfileInfo,
  updateUserInput
};

export default connect(
  mapStateToProps,
  storeActions
)(withRouter(Checkout));
