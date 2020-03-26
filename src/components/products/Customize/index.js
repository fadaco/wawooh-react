import React, {Component} from 'react';
import Desktop from './desktop';
import Mobile from './mobile';
import { connect } from 'react-redux';
import {DesktopContainer, MobileContainer} from '../../ui/Responsiveness';
import {customizeInput, addCustomizeItemToCart} from '../../../store/actions/CustomizeAction';
import {getUserMeasurement, deleteUserMeasurement} from "../../../store/actions/MeasurementAction";
import {getUserAddress} from "../../../store/actions/UserAction"
import { getProductDetails } from "../../../store/actions/ProductAction";
import { withRouter } from 'react-router-dom';

class Customize extends Component {
    componentDidMount() {
        this.props.getUserMeasurement();
        this.props.getUserAddress();
        const id = this.props.match.params.id;
        this.props.getProductDetails(id);
    }

    constructor() {
        super();
        this.state = {
            fabricAct: false,
            showModal: false,
            showAddressModal: false,
            savedAdd: true,
            address: '',
            fabricShow:'',
            fabricPrice: 0,
            artworkPrice: 0,
            errors: {}
        };
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onClickFabric = this.onClickFabric.bind(this);
        this.onClickPickup = this.onClickPickup.bind(this);
        this.onShowAddress = this.onShowAddress.bind(this);
    }

    handleFabricPrice = (price, type) => {
        this.setState({[type]: price})
    }

    validateField = () => {
        // let fields = this.props;
        let errors = {};
        let isValid = true;

        if(!this.props.quantity) {
            isValid = false;
            errors['quantity'] = 'Enter a quantity'
        } else if(this.props.quantity.length <= 0) {
            isValid = false;
            errors['quantity'] = 'Enter a valid quantity'
        }
        if(!this.props.measurementId) {
            
        }
        this.setState({errors: errors});
        return isValid;
    }

    toggleModal=()=> {
        this.setState({ showModal: !this.state.showModal });
    }
    toggleAddressModal=()=> {
        this.setState({ showAddressModal: !this.state.showAddressModal });
    }

    onClickFabric(e) {
        e.preventDefault();
        this.setState({pickUpFab: false});
        this.setState({showfabricAvailable: true});
    }

    onClickPickup(e) {
        e.preventDefault();
        this.setState({pickUpFab: true});
        this.setState({showfabricAvailable: false});
    }

    onShowAddress(e) {
        e.preventDefault();
        this.setState({savedAdd: !this.state.savedAdd});
    }

    toggleFabric = (params) => {
        switch (params) {
            case 'haveFabric':
                this.setState({fabricShow: params});
                break;
            case 'selectFabric':
                this.setState({fabricShow:params});
                break;
            default:
                return false;
        }
    }
    toggleUserAddress = (params) => {
        switch (params) {
            case 'savedAddress':
                this.setState({address: params});
                break;
            case 'newAddress':
                this.setState({address:params});
                break;
            default:
                return false;
        }
    }

    addCustomizeItemToCart = () => {
        if(this.validateField()) {
            let data = {
                productId: this.props.productData.id,
                quantity: this.props.quantity,
                designerId: this.props.productData.designerId,
                measurementId: this.props.measurementId,
                amount: this.props.quantity * this.props.productData.amount,
                slashedPrice: '',
                artWorkPictureId: this.props.artworkPictureId ? this.props.artworkPictureId: null,
                materialPictureId: this.props.materialPictureId ? this.props.materialPictureId: null,
                materialStatus: 'Y',
                notes: this.props.notes,
                materialPickUpAddressId: this.props.materialPickUpAddressId ? this.props.materialPickUpAddressId : null,
                materialPickupDate: this.props.materialPickupDate,
                expiryDate: '',
                productColorStyleId: this.props.productData.productColorStyleDTOS[0].id
            };
            this.props.addCustomizeItemToCart(data, this.props.history);
        }
    }

    deleteMeasurement = () => {
        let data = {
            id: 29
        };
        this.props.deleteUserMeasurement(data);
    }
    onChangeInput(key, value) {
        this.props.customizeInput(key, value);
    }

    render() {
        return (
            <div>
                <DesktopContainer>
                    <Desktop
                        errors = {this.state.errors}
                        productDetails={this.props.productData}
                        userAddressList={this.props.userAddressList}
                        measurementList={this.props.measurementList}
                        onChangeInput={(key, value) => this.onChangeInput(key, value)}
                        showModal={this.state.showModal}
                        openModal={this.toggleModal}
                        showAdd={this.state.address}
                        loading={this.props.loading}
                        updateFabric={(price) => this.handleFabricPrice(price, 'fabricPrice')}
                        updateArtwork={(price)=>this.handleFabricPrice(price,'artworkPrice')}
                        fabPrice={this.state.fabricPrice}
                        artPrice={this.state.artworkPrice}
                        measurementId={this.props.measurementId}
                        addToCart={this.addCustomizeItemToCart}
                        delMeasure={this.deleteMeasurement}
                        fabricShow={this.state.fabricShow}
                        toggleFabric={(params) => this.toggleFabric(params)}
                        toggleUserAddress={(params)=>this.toggleUserAddress(params)}
                    />
                </DesktopContainer>

                <MobileContainer>
                    <Mobile 
                        productDetails={this.props.productData}
                        userAddressList={this.props.userAddressList}
                        measurementList={this.props.measurementList}
                        onChangeInput={(key, value) => this.onChangeInput(key, value)}
                        showModal={this.state.showModal}
                        showAddModal={this.state.showAddressModal}
                        openModal={this.toggleModal}
                        openAddressModal={this.toggleAddressModal}
                        showAdd={this.state.savedAdd}
                        loading={this.props.loading}
                        showAddress={this.onShowAddress}
                        updateFabric={(price) => this.handleFabricPrice(price, 'fabricPrice')}
                        updateArtwork={(price)=>this.handleFabricPrice(price,'artworkPrice')}
                        fabPrice={this.state.fabricPrice}
                        artPrice={this.state.artworkPrice}
                        measurementId={this.props.measurementId}
                        addToCart={this.addCustomizeItemToCart}
                        delMeasure={this.deleteMeasurement}
                        fabricShow={this.state.fabricShow}
                        toggleFabric={(params) => this.toggleFabric(params)}
                        toggleUserAddress={(params)=>this.toggleUserAddress(params)}
                    />
                </MobileContainer>
            </div>
        )
    }
}

const mapStoreToProps = (state) => ({
    ...state.customize,
    ...state.measurement,
    ...state.user,
    ...state.product
});

const storeActions = {
    addCustomizeItemToCart,
    customizeInput,
    getUserMeasurement,
    deleteUserMeasurement,
    getUserAddress,
    getProductDetails
}

export default connect(mapStoreToProps, storeActions)(withRouter(Customize));