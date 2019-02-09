import React, { Component } from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridItem from "../../baseComponent/Grid/GridItem.jsx";
import GridContainer from "../../baseComponent/Grid/GridContainer.jsx";
import CustomInput from "../../baseComponent/CustomInput/CustomInput.jsx";
import Button from "../../baseComponent/CustomButtons/Button.jsx";
import Card from "../../baseComponent/Card/Card.jsx";
import CardHeader from "../../baseComponent/Card/CardHeader.jsx";

import CardBody from "../../baseComponent/Card/CardBody.jsx";
import CardFooter from "../../baseComponent/Card/CardFooter.jsx";

const styles = {
  cardCategoryWhite: {
    color: "#424242",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#424242",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    boderBottom: "1px solid #ccc"
  }
};

class Order extends Component {
  state = {};

  handleChange = () => {
    console.log("calling");
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Order Info</h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Order Number"
                      id="orderNumber"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Issued On"
                      id="issuedOn"
                      formControlProps={{
                        fullWidth: true
                      }}
                      onChange={this.handleChange}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Email address"
                      id="emailAddress"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="primary">Update Order</Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Order.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Order);
