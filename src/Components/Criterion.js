import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Priority from "./Priority";
import './Criterion.css';

class Criterion extends Component {
  render() {
    return (
      <div className="criterion">
        <Priority level={this.props.priority} />
        <p className="criterion-overview">
          <label>
            <input type="checkbox" /> {this.props.label}:
          </label>
          <br />
          {this.props.text}
        </p>
      </div>
    );
  }
}

Criterion.propTypes = {
  priority: PropTypes.oneOf(['high', 'med', 'low']).isRequired,
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Criterion;
