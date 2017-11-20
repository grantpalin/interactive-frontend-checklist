import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CriteriaGroup from "./CriteriaGroup";
import './Criteria.css';

class Criteria extends Component {
  render() {
    return (
      <div className="criteria">
        {this.props.children}
      </div>
    );
  }
}

Criteria.propTypes = {
  children: PropTypes.arrayOf(CriteriaGroup).isRequired,
};

export default Criteria;
