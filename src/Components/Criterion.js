import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Priority from "./Priority";
import './Criterion.css';

class Criterion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };

    this.onStatusChange = this.onStatusChange.bind(this);
  }

  // handles changes to the checkbox checked state
  onStatusChange(e) {
    // send status update upstream to parent CriteriaGroup so it can update its own tracking
    this.props.updateChecksRemaining(this.props.label, this.props.priority, this.state.checked);

    // update the local checked state - just invert it
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    return (
      <div className="criterion">
        <Priority level={this.props.priority} />
        <p className="criterion-overview">
          <label>
            <input type="checkbox" checked={this.state.checked} onChange={this.onStatusChange} /> {this.props.label}:
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
  updateChecksRemaining: PropTypes.func.isRequired,
};

export default Criterion;
