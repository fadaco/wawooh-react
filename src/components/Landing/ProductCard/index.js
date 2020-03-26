import React, { Component } from "react";
import Desktop from "./desktop";
import Mobile from "./mobile";

import { DesktopContainer, MobileContainer } from "../../ui/Responsiveness";

class ProductCards extends Component {
  render() {
    return (
      <div>
        <DesktopContainer>
          <Desktop
            name={this.props.name}
            designer={this.props.designer}
            amount={this.props.amount}
            img={this.props.img}
          />
        </DesktopContainer>

        <MobileContainer>
          <Mobile
            data={this.props.data}
          />
        </MobileContainer>
      </div>
    );
  }
}
export default ProductCards;
