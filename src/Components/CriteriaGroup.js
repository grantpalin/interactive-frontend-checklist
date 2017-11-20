import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Criterion from './Criterion';
import './CriteriaGroup.css';

class CriteriaGroup extends Component {
  render() {
    return (
      <div className="criteria-group">
        <h2 className="criteria-group-title">{this.props.title}</h2>
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
