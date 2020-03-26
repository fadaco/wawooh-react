import React, { Component } from "react";
import Desktop from "./desktop";
import Mobile from "./mobile";
import { connect } from "react-redux";
import { DesktopContainer, MobileContainer } from "../ui/Responsiveness";
import {
  updateUserInput,
  saveAddress,
  updateAddress,
  deleteAddress,
  editAddress
} from "../../store/actions/UserAction";
import City from "../../city";

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addressForm: "",
      country: "",
      region: "",
      city: "",
      errors: {}
    };
    // this.changeInput = this.changeInput.bind(this);
    this.showAddressForm = this.showAddressForm.bind(this);
    this.deleteAddress = this.deleteAddress.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
    this.selectRegion = this.selectRegion.bind(this);
  }

  selectCountry(params, val) {
    this.props.updateUserInput(params, val);
    this.setState({ country: val });
  }

  selectRegion(params, val) {
    this.props.updateUserInput(params, val);
    City.forEach(item => {
      let city = Object.keys(item)[0];
      if (city === val) {
        this.setState(
          {
            ...this.state,
            city: Object.values(item)[0]
          },
          () => {
            this.props.updateUserInput("city", this.state.city);
          }
        );
        // console.log(Object.values(item)[0]);
      }
    });
    this.setState({ region: val });
  }

  validateInputFields = () => {
    let errors = {};
    let formIsValid = true;

    if (!this.props.firstName) {
      formIsValid = false;
      errors["firstName"] = "Enter your firstname";
    }
    if (typeof this.props.firstName !== undefined) {
      if (!this.props.firstName.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["firstName"] = "Eh! We only accept alphabet here";
      }
    }
    if (!this.props.lastName) {
      formIsValid = false;
      errors["lastName"] = "Please, enter your Last Name";
    }
    if (typeof this.props.lastName !== undefined) {
      if (!this.props.lastName.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["firstName"] = "Eh! We only accept alphabet here";
      }
    }
    if (!this.props.address) {
      formIsValid = false;
      errors["address"] = "Please, enter your address";
    }
    if (!this.props.country) {
      formIsValid = false;
      errors["country"] = "You seems to have forgotten this!";
    }
    if (!this.props.zipCode) {
      formIsValid = false;
      errors["zipCode"] = "Please, enter your zip code";
    }
    if (!this.props.city) {
      formIsValid = false;
      errors["city"] = "Please, select a city!";
    }
    if (!this.props.state) {
      formIsValid = false;
      errors["state"] = "Your state is very important!";
    }
    if (!this.props.phoneNo) {
      formIsValid = false;
      errors["phoneNo"] = "Please enter your phone no.";
    }

    if (typeof this.props.phoneNo !== "undefined") {
      if (!this.props.phoneNo.match(/^[0-9]{11}$/)) {
        formIsValid = false;
        errors["phoneNo"] = "Please enter valid phone no.";
      }
    }
    this.setState({ errors: errors });
    return formIsValid;
  };

  onChangeInput(key, value) {
    console.log(key, value);
    this.props.updateUserInput(key, value);
  }

  addressData = () => {
    if (this.validateInputFields()) {
      let data = {
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        country: this.state.country,
        state: this.state.region,
        address: this.props.address,
        city: this.props.city,
        preferred: this.props.preferred,
        phoneNo: this.props.phoneNo,
        postal: this.props.postal,
        zipCode: this.props.zipCode
      };

      if (this.props.edit) {
        this.props.editAddress(data);
      } else {
        this.props.saveAddress(data);
      }
    }
  };

  deleteAddress(id) {
    this.props.deleteAddress(id);
  }

  showAddressForm(params) {
    switch (params) {
      case "slim":
        this.setState({ hideShow: params });
        break;
      case "regular":
        this.setState({ hideShow: params });
        break;
      case "trim":
        this.setState({ hideShow: params });
        break;
      default:
        return false;
    }
  }
  render() {
    return (
      <div>
        <DesktopContainer>
          <Desktop
            errors={this.state.errors}
            userAddress={this.props.userAddress}
            country={this.props.country}
            state={this.props.state}
            onChangeInput={(key, value) => this.onChangeInput(key, value)}
            loading={this.props.loading}
            c={this.state}
            changeRegion={(key, val) => {
              this.selectRegion(key, val);
            }}
            changeCountry={(params, val) => {
              this.selectCountry(params, val);
            }}
            change={this.changeInput}
            saveData={this.addressData}
            removeAddress={id => this.deleteAddress(id)}
            addressForm={this.state.addressForm}
          />
        </DesktopContainer>
        <MobileContainer>
          <Mobile
            userAddress={this.props.userAddress}
            country={this.props.country}
            loading={this.props.loading}
            state={this.props.state}
            onChangeInput={(key, value) => this.onChangeInput(key, value)}
            change={this.changeInput}
            saveData={this.addressData}
            removeAddress={id => this.deleteAddress(id)}
            addressForm={this.state.addressForm}
            c={this.state}
            changeRegion={val => {
              this.selectRegion(val);
            }}
            changeCountry={val => {
              this.selectCountry(val);
            }}
          />
        </MobileContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.user
});

const addressActions = {
  updateUserInput,
  saveAddress,
  updateAddress,
  deleteAddress,
  editAddress
};

export default connect(
  mapStateToProps,
  addressActions
)(Address);
