import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Criterion from './Criterion';
import './CriteriaGroup.css';

class CriteriaGroup extends Component {
  constructor(props) {
    super(props);

    // get an array of child elements (Criterion) for processing
    const children = React.Children.toArray(this.props.children);

    // tally the number of each priority level used in this group
    const levelCounts = {
      low: children.filter(child => child.props.priority === 'low').length,
      med: children.filter(child => child.props.priority === 'med').length,
      high: children.filter(child => child.props.priority === 'high').length,
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
    return (
      <div className="criteria-group">
        <h2 className="criteria-group-title">{this.props.title}</h2>
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

CriteriaGroup.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(Criterion).isRequired,
  updateMasterTallies: PropTypes.func.isRequired
};

export default CriteriaGroup;
