import React from "react";
import { connect } from "react-redux";
import Styled from "styled-components";
import Sidebar from "./Desktop/sidebar";
import Landing from "./Desktop/landing";
import Order from "./Desktop/order";
import OrderDetail from "./Desktop/orderDetail";
import UpdatePayment from "./Desktop/updatePayment";
import TrackOrder from "./Desktop/trackOrder";
import Address from "./Desktop/address";
import Escrow from "./Desktop/escrow";
import EscrowDetail from "./Desktop/escrowDetail";
import Bespoke from "./Desktop/bespoke";
import BespokeDetail from "./Desktop/bespokeDetail";
import Preference from "./Desktop/preference";
import Measurement from "./Desktop/measurement";
import MeasurementDetail from "./Desktop/viewMeasurementDetail";
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
 display: flex;
 padding: 30px 100px;
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
    this.deleteAddress = this.deleteAddress.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  saveData = () => {
    let data = {
      oldPassword: this.props.oldPassword,
      newPassword: this.props.newPassword
    };
    this.props.editUserPreference(data);
  };

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
        return { width: "30%" };
      case "S":
        return { width: "50%" };
      case "D":
        return { width: "1000%" };
      case "C":
        return { width: "100%", backgroundColor: "tomato" };
      default:
        return { width: "10%" };
    }
  };

  deleteAddress(id, index) {
    if (window.confirm("Do you want to delete this address?")) {
      this.props.deleteAddress(id);
      this.props.userAddress.splice(index, 1);
    }
  }

  showForm = params => {
    if (Number(params) >= 0) {
      let address = this.props.userAddress[params];
      this.props.getUserSingleAddress(address);
    }
    this.setState({ showAddressForm: !this.state.showAddressForm });
    this.setState({ addressList: !this.state.addressList });
  };

  measurement = {};

  componentDidMount() {
    this.props.getUserAddress();
    this.props.getUserOrder();
    this.props.getBespokeBid();
    this.props.getUserMeasurement();
  }

  changeInput = e => {
    const val = e.target.value;
    const name = e.target.name;
    this.measurement[name] = val;
    this.props.updateUserPreference(val, name);
  };

  switchTabs(params, params2, orderNum) {
    // console.log(params);
    this.setState({ profileTab: params });
    if (params2 !== null) {
      if (Number.isInteger(params2)) {
        this.setState({ orderDetail: params2 });
      } else {
        this.setState({ walletButton: params2 });
      }
    }

    if (orderNum) {
      this.setState(
        {
          orderNum: orderNum
        },
        () => {
          this.props.trackUserOrder(orderNum);
        }
      );
      console.log(orderNum);
    }
  }

  viewBespoke = (params, params2) => {
    this.setState({ profileTab: params });
    this.props.viewBespokeBid(params2);
  };

  showMeasurementDetail = (params, params2) => {
    const measurementDetail = this.props.measurement[params2];
    this.setState({
      profileTab: params,
      measurementList: measurementDetail
    });
  };

  deleteMeasure = (params, index) => {
    if (window.confirm("Delete this measurement?")) {
      this.props.deleteUserMeasurement(params);
      this.props.measurement.splice(index, 1);
    }
  };

  showModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  updatePayment = e => {
    this.props.saveTransferInfo(e.target.name, e.target.value);
  };

  handleChange = (selectedDates, dateStr, instance) => {
    this.props.saveTransferInfo("paymentDate", dateStr);
  };

  submitTransferInfo = () => {
    this.props.updateTransferInfo(this.props.user.transferInfo);
  };

  render() {
    return (
      <ProfileContainer>
        {this.state.modal ? (
          <Modal
            open={true}
            onClose={this.showModal}
            disableBackdropClick={true}
            maxWidth="md"
            onClick={this.showModal}
            rootClass={"modal-div"}
          >
            <Measurements change={this.changeInput} />
          </Modal>
        ) : (
          ""
        )}

        <Sidebar
          onclick={params => this.switchTabs(params)}
          user={this.props.user}
        />
        {this.state.profileTab === "landing" ? (
          <Landing
            click={(params, params2) => this.switchTabs(params, params2)}
          />
        ) : (
          ""
        )}

        {this.state.profileTab === "bespoke" ? (
          <Bespoke
            click={(params, params2) => this.viewBespoke(params, params2)}
          />
        ) : null}

        {this.state.profileTab === "bespokeDetail" ? <BespokeDetail /> : null}

        {this.state.profileTab === "orders" ? (
          <Order
            order={this.props.order}
            trackOrder={(params, index, orderNum) =>
              this.switchTabs(params, index, orderNum)
            }
            orderDetail={(params, index) => this.switchTabs(params, index)}
          />
        ) : (
          ""
        )}

        {this.state.profileTab === "trackOrder" ? (
          <TrackOrder
            renderProgressBar={params => this.renderProgressBar(params)}
            renderstatus={params => this.renderstatus(params)}
            trackOrderList={this.props.trackOrder}
            trackOrder={(params, index) => this.switchTabs(params, index)}
            orderNum={this.state.orderNum}
          />
        ) : null}

        {this.state.profileTab === "contact" ? (
          <Address
            hideAddressForm={this.props.user.addressRedirect}
            show={this.state.showAddressForm}
            toggleForm={params => this.showForm(params)}
            address={this.props.userAddress}
            removeAddress={(id, index) => this.deleteAddress(id, index)}
          />
        ) : (
          ""
        )}

        {this.state.profileTab === "escrow" ? (
          <Escrow
            balance={this.props.user.userInfo}
            escrowDetail={(params, params2) => this.switchTabs(params, params2)}
          />
        ) : (
          ""
        )}

        {this.state.profileTab === "preference" ? (
          <Preference
            user={this.props.user.userInfo}
            change={this.changeInput}
            saveDataMy={params => this.saveData(params)}
          />
        ) : (
          ""
        )}

        {this.state.profileTab === "orderdetail" ? (
          <OrderDetail
            onclick={params => this.switchTabs(params)}
            order={this.props.order}
            orderDetail={this.state.orderDetail}
          />
        ) : (
          ""
        )}

        {this.state.profileTab === "updatePayment" ? (
          <UpdatePayment
            saveTransferInfo={this.submitTransferInfo}
            onChange={e => this.updatePayment(e)}
            handleChange={(selectedDates, dateStr, instance) =>
              this.handleChange(selectedDates, dateStr, instance)
            }
          />
        ) : null}

        {this.state.profileTab === "escrowDetail" ? (
          <EscrowDetail walletButton={this.state.walletButton} />
        ) : (
          ""
        )}

        {this.state.profileTab === "measurement" ? (
          <Measurement
            onclick={params => this.switchTabs(params)}
            deleteMeasure={(params, index) => this.deleteMeasure(params, index)}
            showModal={this.showModal}
            onView={(params, params2) =>
              this.showMeasurementDetail(params, params2)
            }
          />
        ) : (
          ""
        )}

        {this.state.profileTab === "measurementdetail" ? (
          <MeasurementDetail
            onclick={params => this.switchTabs(params)}
            measurement={this.state.measurementList}
            deleteMeasure={(params, index) => this.deleteMeasure(params, index)}
          />
        ) : null}
      </ProfileContainer>
    );
  }
}

const mapStateToProps = state => ({
  userAddress: state.user.userAddressList,
  order: state.orders.orders,
  trackOrder: state.orders.trackOrder,
  bespokeBids: state.orders.bespokeBids,
  user: state.user,
  measurement: state.measurement.measurementList
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
