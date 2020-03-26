import React, { Component } from "react";
import Desktop from "./desktop";
import Mobile from "./mobile";
import { DesktopContainer, MobileContainer } from "../../ui/Responsiveness";

class ProductCard extends Component {
  
  render() {
    return (
      <div>
        <DesktopContainer>
          <Desktop
            data={this.props.data}
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

export default ProductCard;
