import React from 'react';
import PropTypes from 'prop-types';
//connecting to redux
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

//maping a redux a state to a props to componet, to have access to it
const mapStateToProps = state => ({
  alerts: state.alert //got from the rootReducers-reducer folder
});

export default connect(mapStateToProps)(Alert);