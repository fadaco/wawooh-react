import React, {Component} from 'react';
import Desktop from './desktop';
import Mobile from './mobile';
import { connect } from 'react-redux';
import {DesktopContainer, MobileContainer} from '../ui/Responsiveness';
import {bespokeValues,styleCatalogue} from '../../store/actions/BespokeAction';
import {getUserMeasurement} from "../../store/actions/MeasurementAction";

class Bespoke extends Component {
    constructor(props) {
        super(props)
        this.state = {
            upHolder: false,
            file:'',
            imagePreviewUrl:'',
            showModal: false,
            openDetails: false,
            selectedStyle: {},
        }
    }
    componentDidMount() {
        if(this.props.getStylesList.length < 1) {
            this.getStylesCatalgoues();
        }
    }
    toggleDetails = (item) => {
        console.log(item.picture);
        if (item.picture) {
            this.setState({
                ...this.state,
                openDetails: !this.state.openDetails,
                selectedStyle: item
            });
        } else {
            this.setState({
                ...this.state,
                openDetails: !this.state.openDetails
            });
        }
        
    }

    getStylesCatalgoues() {
        const {styleCatalogue, stylePage, styleSize, getStylesList } = this.props;
        styleCatalogue({page: stylePage, size: styleSize}, getStylesList);
    }

    loadMoreStyle() {
        const page = this.props.StylePage + 1;
        this.props.updateStylesValues('StyePage', page);
        setTimeout(()=>{
            this.getStyles();
        }, 100);
    }
    toggleUpload = () => {
         this.setState({upHolder: !this.state.upHolder})   
    }

    onChangeInput(key, value) {
        this.props.bespokeValues(key,value)
    }

    handleImagePreview = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onload = () => {
            this.setState({file:file, imagePreviewUrl: reader.result}, () => {
                this.onChangeInput('sideImage', this.state.imagePreviewUrl)
            })
        }
        reader.readAsDataURL(file);
    }
    toggleModal=()=> {
        this.setState({ showModal: !this.state.showModal });
    }
    render() {
        const {getStylesList} = this.props;
        return (
            <div>
                <DesktopContainer>
                    <Desktop
                        openModal={this.state.openDetails}
                        toggleModal={(item) => this.toggleDetails(item)}
                        onChangeInput={(key, value)=>this.onChangeInput(key,value)}
                        imageState={this.state.imagePreviewUrl} 
                        hide={this.state.upHolder} 
                        toggle={this.toggleUpload} 
                        handlePreview={this.handleImagePreview}
                        list={getStylesList}
                        loading={this.props.getStyleLoading}
                        modalContent={this.state.selectedStyle}
                    />
                </DesktopContainer>

                <MobileContainer>
                    <Mobile 
                        openModal2={this.state.openDetails}
                        toggleModal={(item) => this.toggleDetails(item)}
                        onChangeInput={(key, value)=>this.onChangeInput(key,value)}
                        imageState={this.state.imagePreviewUrl} 
                        showUpload={this.state.showModal} 
                        openModal={this.toggleModal} 
                        toggle={this.toggleUpload} 
                        handlePreview={this.handleImagePreview}
                        list={getStylesList}
                        loading={this.props.getStyleLoading}
                        modalContent={this.state.selectedStyle}
                    />
                </MobileContainer>
            </div>
        )
    }
}
const mapStoreToProps = (state) => ({
    ...state.measurement,
    ...state.user,
    ...state.bespoke
});

const storeActions = {
    bespokeValues,
    getUserMeasurement,
    styleCatalogue
}

export default connect(mapStoreToProps, storeActions)(Bespoke);
