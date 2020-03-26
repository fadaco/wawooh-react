import React, {Component} from 'react';
import Desktop from './desktop';
import Mobile from './mobile';
import {connect} from 'react-redux';
import {DesktopContainer, MobileContainer} from '../ui/Responsiveness';
import {measureInput, saveMeasurement} from "../../store/actions/MeasurementAction";
import {withRouter} from 'react-router-dom';

class Measurement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            presentPage: true,
            nextPage: false,
            thirdPage: false,
            hideShow: ''
        }
        this.changeInput = this.changeInput.bind(this);
        this.showNextPage = this.showNextPage.bind(this);
        this.showPrevPage = this.showPrevPage.bind(this);
        this.showThirdPage = this.showThirdPage.bind(this);
        this.toggleFitnessImage = this.toggleFitnessImage.bind(this);
    }

    changeInput = (e) => {
        e.preventDefault();
        const valType = e.target.value === 'checkbox' ? e.target.checked : e.target.value;
        const val = valType;
        const name = e.target.name;
        this.measurement[name] = val;
        console.log(this.measurement);
    }

    checkMaxLength = () => {
        if(this.value.length > 4 ) {
            return false;
        }
    }

    onChangeInput = (key, value) => {
        this.props.measureInput(key, value);
    }
    showNextPage(e) {
        e.preventDefault();
        this.setState({nextPage: true})
        this.setState({presentPage: false})
    }

    toggleFitnessImage(params) {
        switch (params) {
            case 'slim':
                this.setState({hideShow: params});
                break;
            case 'regular':
                this.setState({hideShow:params});
                break;
            case 'trim':
                this.setState({hideShow: params});
                break;
            default:
                return false;
        }
    }

    showPrevPage(e) {
        e.preventDefault();
        this.setState({presentPage: true})
        this.setState({nextPage: false})
        this.setState({thirdPage: false})
    }

    showThirdPage(e) {
        e.preventDefault();
        this.setState({nextPage: false})
        this.setState({thirdPage: true})
    }

    measureData = () => {
        let data = {
            name: this.props.name,
            gender: this.props.gender,
            fitness: this.props.fitness,
            unit: this.props.unit,
            ankle: this.props.ankle,
            armHole: this.props.armHole,
            backShirtLength: this.props.backShirtLength,
            biceps: this.props.biceps,
            blouseLength: this.props.blouseLength,
            bubaLength: this.props.bubaLength,
            bust: this.props.bust,
            crotch: this.props.crotch,
            chest: this.props.chest,
            elbowCircumference: this.props.elbowCircumference,
            fistCircumference: this.props.fistCircumference,
            fullLength: this.props.fullLength,
            halfLength: this.props.halfLength,
            hips: this.props.hips,
            kneeCircumference: this.props.kneeCircumference,
            kneeLength: this.props.kneeLength,
            lapCircumference: this.props.lapCircumference,
            longSleeve: this.props.longSleeve,
            neck: this.props.neck,
            senatorLength: this.props.senatorLength,
            shirtLength: this.props.shirtLength,
            shortSleeve: this.props.shortSleeve,
            shortsLength: this.props.shortsLength,
            shoulderWidth: this.props.shoulderWidth,
            trouserLength: this.props.trouserLength,
            thigh: this.props.thigh,
            threeQuarterSleeve: this.props.threeQuarterSleeve,
            waist: this.props.waist,
            wrist: this.props.wrist,
        }
        // console.log(data);
        this.props.saveMeasurement(data, this.props.history);
    }

    // measurement = {
    //     name: '',
    //     gender: '',
    //     fitness: '',
    //     unit: ''
    // }

    render() {
        return (
            <div>
                <DesktopContainer>
                    <Desktop
                        // change={this.changeInput}
                        onChangeInput={(key,value)=>this.onChangeInput(key, value)}
                        defaultShow={this.state}
                        prevPage={this.showPrevPage}
                        nextPage={this.showNextPage}
                        saveData={this.measureData}
                        fitnessImage={(params) => this.toggleFitnessImage(params)}
                        hideShow={this.state.hideShow}
                        loading={this.props.loading}
                    />
                </DesktopContainer>

                <MobileContainer>
                    <Mobile
                        // change={this.changeInput}
                        onChangeInput={(key,value)=>this.onChangeInput(key, value)}
                        defaultShow={this.state}
                        prevPage={this.showPrevPage}
                        nextPage={this.showNextPage}
                        thirdPage={this.showThirdPage}
                        saveData={this.measureData}
                        fitnessImage={(params) => this.toggleFitnessImage(params)}
                        hideShow={this.state.hideShow}
                        loading={this.props.loading}
                    />
                </MobileContainer>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.measurement
});

const storeActions = {
    saveMeasurement,
    measureInput
};

export default connect(mapStateToProps, storeActions)(withRouter(Measurement));