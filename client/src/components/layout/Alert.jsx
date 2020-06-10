import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = (props) => {
  const { alerts } = props;

  if (alerts && alerts.length > 0) {
    return alerts.map((alert) => (
      <div className={`alert alert-${alert.alertType}`} key={alert.id}>
        {alert.msg}
      </div>
    ));
  }

  return null;
};

// const Alert = ({ alerts }) =>
//   alerts !== null &&
//   alerts.length > 0 &&
//   alerts.map((alert) => (
//     <div key={alert.id} className={`alert alert-${alerts.type}`}>
//       {alert.msg}
//     </div>
//   ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
