import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CriteriaGroup from "./CriteriaGroup";
import './Criteria.css';

class Criteria extends Component {
  constructor(props) {
    super(props);

    // get an array of child elements (CriteriaGroup) for processing
    const groups = React.Children.toArray(this.props.children);

    // generate per-group priority tallies
    const levels = groups.map(group => {
      const children = group.props.children;

      return {
        low: children.filter(child => { return child.props.priority === 'low' }).length,
        med: children.filter(child => { return child.props.priority === 'med' }).length,
        high: children.filter(child => { return child.props.priority === 'high' }).length
      };
    });

    // reduce the per-group priority tallies to a single tally per priority
    const levelCounts = levels.reduce(function(accumulator, currentValue, currentIndex, array) {
      return {
        low: accumulator.low + currentValue.low,
        med: accumulator.med + currentValue.med,
        high: accumulator.high + currentValue.high
      }
    }, {low: 0, med: 0, high: 0});

    // store the tallies in the local state
    this.state = {
      low: levelCounts.low,
      med: levelCounts.med,
      high: levelCounts.high
    }
  }

  render() {
    return (
      <div className="criteria">
        <ul className="priority-counts">
          {this.state.high > 0 ? <li className="priority-count high">High: {this.state.high}</li> : null }
          {this.state.med > 0 ? <li className="priority-count medium">Medium: {this.state.med}</li> : null }
          {this.state.low > 0 ? <li className="priority-count low">Low: {this.state.low}</li> : null }
          <li className="priority-count total">Total: {this.state.high + this.state.med + this.state.low}</li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

Criteria.propTypes = {
  children: PropTypes.arrayOf(CriteriaGroup).isRequired,
};

export default Criteria;
