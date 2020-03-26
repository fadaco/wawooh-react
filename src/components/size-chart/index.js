import React, { Component } from 'react';
import Desktop from './desktop';
import Mobile from './mobile';
import {  DesktopContainer, MobileContainer } from '../ui/Responsiveness';

class Sizechart extends Component {
  constructor(){
    super()

    this.state= {
        inch: 'block',
        centimeter: 'none',
        buttonFill: ''
    } 
    this.centimeters = this.centimeters.bind(this)
  };

  inches = () => {
    this.setState({ inch: 'block', centimeter: 'none', buttonFill: 'btn-fill'});
  };

  centimeters(){
    this.setState({ inch: 'none', centimeter: 'block', buttonFill: 'btn-fill'});
  };

  render(props){
    return(
      <div>
        <DesktopContainer>
          <Desktop 
            inch={this.state.inch}
            centimeter={this.state.centimeter}
            buttonFill={this.state.buttonFill}
            onInchesClick={this.inches}
            onCmClick={() => this.centimeters()}
          />
        </DesktopContainer>

        <MobileContainer>
          <Mobile 
            inch={this.state.inch}
            centimeter={this.state.centimeter}
            buttonFill={this.state.buttonFill}
            onInchesClick={this.inches}
            onCmClick={() => this.centimeters()}
          />
        </MobileContainer>

    </div>
    )
  }
}
export default Sizechart;
