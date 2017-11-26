import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Criterion from './Criterion';
import './CriteriaGroup.css';

class CriteriaGroup extends Component {
  constructor(props) {
    super(props);

    // tally the number of each priority level used in this group
    const levelCounts = {
      low: this.props.criteria.filter(child => child.level === 'low').length,
      med: this.props.criteria.filter(child => child.level === 'med').length,
      high: this.props.criteria.filter(child => child.level === 'high').length,
    };

    // store the tallies in the local state
    this.state = {
      low: levelCounts.low,
      med: levelCounts.med,
      high: levelCounts.high
    };
  }

  componentDidMount() {
    // send new or updated data upstream to the App component for summary display
    this.props.updateMasterTallies(this.props.title, this.state.low, this.state.med, this.state.high);
  }

  render() {
    const criteria = this.props.criteria.map((criterion, index) => {
      return (
        <Criterion priority={criterion.level} label={criterion.label} text={criterion.description} key={index} />
      );
    });

    return (
      <div className="criteria-group">
        <h2 className="criteria-group-title">{this.props.title}</h2>
        <ul className="priority-counts">
          <li className="priority-count high">High: {this.state.high}</li>
          <li className="priority-count medium">Medium: {this.state.med}</li>
          <li className="priority-count low">Low: {this.state.low}</li>
          <li className="priority-count total">Total: {this.state.high + this.state.med + this.state.low}</li>
        </ul>
        {criteria}
      </div>
    );
  }
}

CriteriaGroup.propTypes = {
  title: PropTypes.string.isRequired,
  criteria: PropTypes.array.isRequired,
  updateMasterTallies: PropTypes.func.isRequired
};

export default CriteriaGroup;
