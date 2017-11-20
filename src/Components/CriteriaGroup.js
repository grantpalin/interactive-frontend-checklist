import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Criterion from './Criterion';
import './CriteriaGroup.css';

class CriteriaGroup extends Component {
  render() {
    // get an array of child elements (Criterion) for processing
    const children = React.Children.toArray(this.props.children);

    // tally the number of each priority level used in this group
    const levelCounts = {
      low: children.filter(child => child.props.priority === 'low').length,
      med: children.filter(child => child.props.priority === 'med').length,
      high: children.filter(child => child.props.priority === 'high').length,
    };

    return (
      <div className="criteria-group">
        <h2 className="criteria-group-title">{this.props.title}</h2>
        <ul className="priority-counts">
          {levelCounts.high > 0 ? <li className="priority-count high">High: {levelCounts.high}</li> : null }
          {levelCounts.med > 0 ? <li className="priority-count medium">Medium: {levelCounts.med}</li> : null }
          {levelCounts.low > 0 ? <li className="priority-count low">Low: {levelCounts.low}</li> : null }
          <li className="priority-count total">Total: {levelCounts.high + levelCounts.med + levelCounts.low}</li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

CriteriaGroup.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(Criterion).isRequired,
};

export default CriteriaGroup;
