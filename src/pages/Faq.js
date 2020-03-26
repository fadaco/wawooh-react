import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Layout from "../components/ui/Layout";

const DIV = styled.div`
  padding: 30px;
  background-color: white;
  text-align: justify;
  .terms-content {
    padding: 20px;
  }

  @media (min-width: 900px) {
    .terms-content {
      padding: 0px 100px;
    }
  }
`;

const ExpansionPanel = withStyles({
  root: {
    border: "1px solid rgba(0,0,0,.125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    }
  },
  expanded: {
    margin: "auto"
  }
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(0,0,0,.03)",
    borderBottom: "1px solid rgba(0,0,0,.125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {}
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = "ExpansionPanelSummary";

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 2
  }
}))(MuiExpansionPanelDetails);

class CustomizedExpansionPanel extends React.Component {
  state = {
    expanded: "panel1"
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { expanded } = this.state;
    return (
        <Layout>
        <DIV>
          <div
            style={{
              marginBottom: 30,
              fontSize: 30,
              textAlign: "center",
              fontWeight: "bold"
            }}
          >
            FREQUENTLY ASKED QUESTION
          </div>

          <div className="terms-content">
            <p>
              Customer Care - Please call us to speak to one of our customer
              service agents. (07000WAWOOH)0700-0-929664 or send a mail to
              customercare@wawooh.com
            </p>
            <ExpansionPanel
              square
              expanded={expanded === "panel1"}
              onChange={this.handleChange("panel1")}
            >
              <ExpansionPanelSummary>
                <Typography>I have my fabric for the designer to use</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  While ordering, you may desire to use your fabric. We will send
                  our logistics personnel to pick up your fabric at your location
                  after your payment has been confirmed.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              square
              expanded={expanded === "panel2"}
              onChange={this.handleChange("panel2")}
            >
              <ExpansionPanelSummary>
                <Typography>How does an order work on Wawooh</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <p>
                    Ready to made products orders are readily available for
                    shipping within 24hours upon confirmation of payment.Our
                    average package arrival time is within 2 to 3 days.
                  </p>
                  <p>
                    Bespoke orders have on display their production time for
                    processing. Order production processing commences upon
                    confirmation of receipt of order. However, if you choose to
                    use your fabric for your order production-processing time will
                    only start counting from the day of receipt of your fabric by
                    the designer.
                  </p>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              square
              expanded={expanded === "panel3"}
              onChange={this.handleChange("panel3")}
            >
              <ExpansionPanelSummary>
                <Typography>How do I track my order?</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <p>
                    We will provide you a tool to track the status of your order
                    on our website by visiting your Order page.
                  </p>
                  <p>
                    We will also send you several notifications (sms, email) as
                    regards the status of your order from time to time.
                  </p>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              square
              expanded={expanded === "panel4"}
              onChange={this.handleChange("panel4")}
            >
              <ExpansionPanelSummary>
                <Typography>How do I make payment for my Orders?</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <p>
                    You may either choose to pay with any of our card payment
                    option (Wawooh pay) or via bank transfer to the account
                    details sent to you by mail..
                  </p>
                  <p>
                    All payments are prepaid. Wawooh does not allow payment on
                    delivery..
                  </p>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              square
              expanded={expanded === "panel5"}
              onChange={this.handleChange("panel5")}
            >
              <ExpansionPanelSummary>
                <Typography>
                  I have a combination of ready to wear and bespoke products in my
                  cart
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <p>
                    The total price of both the ready to wear and bespoke item
                    will be calculated, and payment for both items will be made in
                    full. However, the delivery timeframe for both items will vary
                    due to the number of days specified by the designer to
                    complete an item.
                  </p>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              square
              expanded={expanded === "panel6"}
              onChange={this.handleChange("panel6")}
            >
              <ExpansionPanelSummary>
                <Typography>
                  How will my shipment arrive for my items of ready to wear and
                  bespoke order?
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <p>
                    We will ship your ready to wear and bespoke order separately.
                  </p>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              square
              expanded={expanded === "panel7"}
              onChange={this.handleChange("panel7")}
            >
              <ExpansionPanelSummary>
                <Typography>How is shipping done?</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <p>
                    We have our shipping partners who will deliver your product to
                    your shipping address and recipient as specified while making
                    your order.
                  </p>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              square
              expanded={expanded === "panel8"}
              onChange={this.handleChange("panel8")}
            >
              <ExpansionPanelSummary>
                <Typography>
                  I want to change my shipping address after I have made an order
                  purchase online
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <p>
                    You may not be able to change your shipping address once an
                    order has been shipped. However, you may call us immediately
                    to inform us of your decision to change your shipping address.
                    Please note that this will attract a penalty and your shipping
                    fee might increase as the case maybe.
                  </p>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              square
              expanded={expanded === "panel9"}
              onChange={this.handleChange("panel9")}
            >
              <ExpansionPanelSummary>
                <Typography>How do i return an item?</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <ul>
                    <li>
                      <span className="makeBold">IMMEDIATELY-</span> You can
                      initiate a return immediately to the delivery person on the
                      spot (reject).
                    </li>
                    <li>
                      <span className="makeBold">Within 2 days –</span> Complete a
                      return request on our contact form or call within 3 days of
                      receipt of the item to notify us, after which you may
                      proceed to ship the item in its original packaging to the
                      Wawooh Quality Assurance representative within 7 working
                      days of receiving the delivery. (Kindly note that you maybe
                      responsible for return shipping).
                    </li>
                  </ul>
                  <p>
                    Please note that we access your return claims before a return
                    can be made. Item must be in original condition and must not
                    be worn or damaged.
                  </p>
                  <p style={{ color: "#cd9933" }}>
                    What is a Genuine Return Claim?{" "}
                  </p>
                  <p>A genuine return claim include; </p>
                  <ol>
                    <li>Incorrect or wrong item of colour and size</li>
                    <li>Removal of the Wawooh QA tag on the item. </li>
                    <li>Damaged, defective or counterfeit item</li>
                  </ol>
                  <p>
                    Once an order has been shipped, it cannot be returned for
                    ingenuine claims.
                  </p>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              square
              expanded={expanded === "panel10"}
              onChange={this.handleChange("panel10")}
            >
              <ExpansionPanelSummary>
                <Typography>
                  How long will it take to return an item and get my refund?
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <p>
                    Once we have evaluated and determined a return, we will
                    commence the refund process. Our refund process takes 4-7
                    working days for it to be fully processed.
                  </p>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              square
              expanded={expanded === "panel11"}
              onChange={this.handleChange("panel11")}
            >
              <ExpansionPanelSummary>
                <Typography>
                  Can I return an item after 3 days or if i remove the QA tag?
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <p>
                    You will not be able to return an item after 3 days if no
                    complaint or return request was made within 3 days of receipt
                    of the item.
                  </p>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              square
              expanded={expanded === "panel12"}
              onChange={this.handleChange("panel12")}
            >
              <ExpansionPanelSummary>
                <Typography>How do i track my return status?</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <p>
                    We will keep you updated by email and SMS about the status of
                    your return.
                  </p>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              square
              expanded={expanded === "panel13"}
              onChange={this.handleChange("panel13")}
            >
              <ExpansionPanelSummary>
                <Typography>
                  Do i have to pay a return shipping charge when i return a
                  product?
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <p>
                    If you have a return, follow the return process above. For a
                    genuine return claim, Wawooh will return ship your order to
                    you at no additional fee. An ingenuine return claim may
                    attract a penalty.
                  </p>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              square
              expanded={expanded === "panel14"}
              onChange={this.handleChange("panel14")}
            >
              <ExpansionPanelSummary>
                <Typography>Pay On Delivery (PoD)?</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <p>
                    We currently do not support pay on delivery. You are expected
                    to pay for all goods before they are delivered.
                  </p>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              square
              expanded={expanded === "panel15"}
              onChange={this.handleChange("panel15")}
            >
              <ExpansionPanelSummary>
                <Typography>Are there any additional or hidden charges for purchase on Wawooh?</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <p>
                      There are no hidden charges for purchase orders on Wawooh.
                  </p>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </DIV>
        </Layout>
    );
  }
}

export default CustomizedExpansionPanel;
