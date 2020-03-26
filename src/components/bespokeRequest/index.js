import React, {Component} from 'react';
import Desktop from './desktop';
import Mobile from './mobile';
import { connect } from 'react-redux';
import {DesktopContainer, MobileContainer} from '../ui/Responsiveness';
import {bespokeValues,addBespokeRequest} from '../../store/actions/BespokeAction';
import {getUserMeasurement} from "../../store/actions/MeasurementAction";
import {getCategories} from '../../store/actions/CategoryAction';
import {  withRouter, Redirect } from 'react-router-dom';

class BespokeRequest extends Component {
    componentDidMount() {
        this.props.getCategories();
        this.props.getUserMeasurement();
    };

    constructor(props) {
        super(props)
        this.state = {
            presentPage: true,
            nextPage: false,
            thirdPage: false,
            hideShow: ''
        } 
    }

    showNextPage = (e) => {
        e.preventDefault();
        this.setState({nextPage: true})
        this.setState({presentPage: false})
    }

    showPrevPage = (e) => {
        e.preventDefault();
        this.setState({presentPage: true})
        this.setState({nextPage: false})
        this.setState({thirdPage: false})
    }

    showThirdPage = (e) => {
        e.preventDefault();
        this.setState({nextPage: false})
        this.setState({thirdPage: true})
    }

    toggleFabric(params) {
        switch (params) {
            case 'Yes':
                this.setState({hideShow: params});
                break;
            case 'No':
                this.setState({hideShow:params});
                break;
            default:
                return false;
        }
    }

    onChangeInput = (key, value) => {
        this.props.bespokeValues(key, value);
    }

    addRequestOrder = () => {
        let data = {
            budget: this.props.budget,
            acceptedBidId: 0,
            note: this.props.note,
            measurement: {
                id: this.props.id
            },
            bespokeStyleId: this.props.bespokeStyleId,
            gender: this.props.gender,
            timeOfDelivery: this.timeOfDelivery,
            height: this.props.height,
            categoryId: this.props.categoryId,
            hasFabric: this.props.hasFabric,
            fabricType: this.props.fabricType,
            heightFeet: this.props.heightFeet,
            sideImage: this.props.sideImage ? this.props.sideImage : null,
            heightInches: this.props.heightInches
        }
        this.props.addBespokeRequest(data, this.props.history);
    }
    render() {
        const properties = this.props;
        if(properties.budget === '' || properties.sideImage === '') {
            return <Redirect to={'/style-catalogue'} />
        }
        return (
            
            <div>
                <DesktopContainer>
                    <Desktop
                        onChangeInput={(key, value) => this.onChangeInput(key, value)}
                        list={this.props.categoryList}
                        loading={this.props.loading}
                        measurementList={this.props.measurementList}
                        defaultShow={this.state} 
                        prevPage={this.showPrevPage}
                        nextPage={this.showNextPage}
                        hideShow={this.state.hideShow}
                        saveData={this.addRequestOrder}
                        properties={this.props}
                        toggleFabric={(params) => this.toggleFabric(params)}
                    />
                </DesktopContainer>
                <MobileContainer>
                    <Mobile 
                        onChangeInput={(key, value) => this.onChangeInput(key, value)}
                        list={this.props.categoryList}
                        measurementList={this.props.measurementList}
                        defaultShow={this.state} 
                        prevPage={this.showPrevPage}
                        nextPage={this.showNextPage}
                        hideShow={this.state.hideShow}
                        saveData={this.addRequestOrder}
                        properties={this.props}
                        toggleFabric={(params) => this.toggleFabric(params)}
                    />
                </MobileContainer>
            </div>
        )
    }
}

const mapStoreToProps = (state) => ({
    ...state.measurement,
    ...state.user,
    ...state.bespoke,
    ...state.category
})

const storeActions = {
    bespokeValues,
    getUserMeasurement,
    addBespokeRequest,
    getCategories
}

export default connect(mapStoreToProps, storeActions)(withRouter(BespokeRequest))