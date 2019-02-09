import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Insurance from "../../components/appComponent/Insurance";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
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
    textDecoration: "none"
  }
};

class InsuranceView extends React.Component {
  state = {};

  handleChange = () => {
    console.log("calling");
  };

  render() {
    return (
      <div>
        <Insurance />
      </div>
    );
  }
}

InsuranceView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InsuranceView);
