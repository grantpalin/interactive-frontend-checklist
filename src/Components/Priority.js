import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Priority.css';

class Priority extends Component {
  render() {
    let output =
      (this.props.level === "high") ? <span className="priority high" title="High priority">&uarr;</span> :
      (this.props.level === "low")  ? <span className="priority low" title="Low priority">&darr;</span> :
      <span className="priority med" title="Medium priority">&ndash;</span>;

    return output;
  }
}

Priority.propTypes = {
  level: PropTypes.oneOf(['high', 'med', 'low']).isRequired,
};

export default Priority;
