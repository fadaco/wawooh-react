import React from "react";
import { connect } from "react-redux";
import Styled from "styled-components";
import LandingPage from "./Mobile/landing";
import PersonalDetail from "./Mobile/personalDetail";
import Order from "./Mobile/order";
import TrackOrder from "./Mobile/trackOrder";
import Escrow from "./Mobile/escrow";
import Bespoke from "./Mobile/bespoke";
import BespokeDetail from "./Mobile/bespokeDetail";
import Measurement from "./Mobile/measurement";
import EscrowDetail from "./Mobile/escrowDetail";
import Address from "./Mobile/address";
import {
  updateUserPreference,
  getUserAddress,
  updateAddress,
  deleteAddress,
  getUserSingleAddress,
  editUserPreference,
  saveTransferInfo,
  updateTransferInfo
} from "../../../store/actions/UserAction";
import {
  getUserOrder,
  trackUserOrder,
  getBespokeBid,
  viewBespokeBid
} from "../../../store/actions/OrderAction";
import {
  getUserMeasurement,
  deleteUserMeasurement
} from "../../../store/actions/MeasurementAction";
import Measurements from "../../measurement";
import Modal from "../../ui/CustomModal";

const ProfileContainer = Styled.div`

`;

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileTab: "landing",
      walletButton: "",
      orderDetail: "",
      modal: false,
      showAddressForm: false,
      addressList: true,
      firstName: "",
      user: {
        firstName: "",
        lastName: "",
        phoneNo: "",
        email: ""
      },
      orderNum: "",
      measurementList: {}
    };
    // this.deleteAddress = this.deleteAddress.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  switchTabs(params, params1, orderNum) {
    this.setState({ profileTab: params });
    if (orderNum) {
      this.setState(
        {
          orderNum: orderNum
        },
        () => {
          this.props.trackUserOrder(orderNum);
        }
      );
    }
  }

  renderstatus = params => {
    switch (params) {
      case "C":
        return <div>Cancelled</div>;
      case "NV":
        return <div>Not Verified</div>;
      case "P":
        return <div>Pending</div>;
      case "CO":
        return <div>Completed</div>;
      case "A":
        return <div>Accepted by Designer</div>;
      case "D":
        return <div>Delivered</div>;
      case "PC":
        return <div>Payment Confirmed</div>;
      case "OP":
        return <div>Order Processing</div>;
      case "RI":
        return <div>Ready for Inspection</div>;
      case "S":
        return <div>Shipped</div>;
      case "RS":
        return <div>Ready for Shipping</div>;
      case "WC":
        return <div>Wawooh Collected</div>;
      case "WR":
        return <div>Wawooh Rejected</div>;
      case "OS":
        return <div>Order Shipped</div>;
      case "PI":
        return <div>Passed</div>;
      default:
        return <div>Pending</div>;
    }
  };

  renderProgressBar = params => {
    switch (params) {
      case "OP":
        return {};
      case "S":
        return {};
      case "D":
        return {};
      case "C":
        return { backgroundColor: "#f7f7f7" };
      default:
        return { width: "10%" };
    }
  };

  componentDidMount() {
    this.props.getUserAddress();
    this.props.getUserOrder();
    this.props.getBespokeBid();
    this.props.getUserMeasurement();
  }

  deleteAddress = (id, index) => {
    if (window.confirm("Do you want to delete this address?")) {
      this.props.deleteAddress(id);
      this.props.userAddress.splice(index, 1);
    }
  };

  deleteMeasure = (params, index) => {
    if (window.confirm("Delete this measurement?")) {
      this.props.deleteUserMeasurement(params);
      this.props.measurement.splice(index, 1);
    }
  };

  saveData(params) {
    this.props.editUserPreference(params);
  }

  changeInput = e => {
    e.preventDefault();
    const val = e.target.value;
    const name = e.target.name;
    this.measurement[name] = val;
    this.props.updateUserPreference(val, name);
    console.log(this.measurement);
  };

  viewBespoke = (params, params2) => {
    this.setState({ profileTab: params });
    this.props.viewBespokeBid(params2);
  };

  showForm = params => {
    if (Number(params) >= 0) {
      let address = this.props.userAddress[params];
      console.log(address);
      this.props.getUserSingleAddress(address);
    }
    this.setState({ showAddressForm: !this.state.showAddressForm });
    this.setState({ addressList: !this.state.addressList });
  };

  showModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  measurement = {};

  render() {
    return (
      <ProfileContainer>
        {this.state.modal ? (
          <Modal
            open={this.showModal}
            onClose={this.showModal}
            onClick={this.showModal}
            disableBackdropClick={true}
            maxWidth={"md"}
          >
            <Measurements change={this.changeInput} />
          </Modal>
        ) : (
          ""
        )}

        {this.state.profileTab === "landing" ? (
          <LandingPage
            onclick={params => this.switchTabs(params)}
            user={this.props.user}
          />
        ) : (
          ""
        )}
        {this.state.profileTab === "personalDetail" ? (
          <PersonalDetail
            onclick={params => this.switchTabs(params)}
            user={this.props.user.userInfo}
            change={this.changeInput}
            saveDataMy={params => this.saveData(params)}
          />
        ) : (
          ""
        )}

        {this.state.profileTab === "orders" ? (
          <Order
            trackOrder={(params, index, orderNum) =>
              this.switchTabs(params, index, orderNum)
            }
            order={this.props.order}
            onclick={params => this.switchTabs(params)}
          />
        ) : null}

        {this.state.profileTab === "bespoke" ? (
          <Bespoke
            click={(params, params2) => this.viewBespoke(params, params2)}
            onclick={params => this.switchTabs(params)}
          />
        ) : null}

        {this.state.profileTab === "bespokeDetail" ? <BespokeDetail /> : null}

        {this.state.profileTab === "measurement" ? (
          <Measurement
            onclick={params => this.switchTabs(params)}
            deleteMeasure={(params, index) => this.deleteMeasure(params, index)}
            showModal={this.showModal}
            onView={(params, params2) => this.measurentDetails(params, params)}
          />
        ) : null}

        {this.state.profileTab === "trackOrder" ? (
          <TrackOrder
            onclick={params => this.switchTabs(params)}
            renderProgressBar={params => this.renderProgressBar(params)}
            renderstatus={params => this.renderstatus(params)}
            trackOrderList={this.props.trackOrder}
            trackOrder={(params, index) => this.switchTabs(params, index)}
            orderNum={this.state.orderNum}
          />
        ) : null}

        {this.state.profileTab === "escrow" ? (
          <Escrow
            onclick={params => this.switchTabs(params)}
            user={this.props.user}
            balance={this.props.user.userInfo}
          />
        ) : (
          ""
        )}

        {this.state.profileTab === "escrowDetail" ? (
          <EscrowDetail onclick={params => this.switchTabs(params)} />
        ) : (
          ""
        )}

        {this.state.profileTab === "address" ? (
          <Address
            onclick={params => this.switchTabs(params)}
            removeAddress={id => this.deleteAddress(id)}
            address={this.props.userAddress}
          />
        ) : (
          ""
        )}
      </ProfileContainer>
    );
  }
}
const mapStateToProps = state => ({
  userAddress: state.user.userAddressList,
  order: state.orders.orders,
  trackOrder: state.orders.trackOrder,
  user: state.user,
  measurement: state.measurement.measurementList,
  bespokeBids: state.orders.bespokeBids
});

const storeAction = {
  getUserAddress,
  getUserOrder,
  deleteAddress,
  updateAddress,
  getUserSingleAddress,
  updateUserPreference,
  editUserPreference,
  trackUserOrder,
  getBespokeBid,
  viewBespokeBid,
  getUserMeasurement,
  deleteUserMeasurement,
  saveTransferInfo,
  updateTransferInfo
};

export default connect(
  mapStateToProps,
  storeAction
)(Profile);
