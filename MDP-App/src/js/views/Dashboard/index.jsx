import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default class Dashboard extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='Dashboard'>
        Hello!! This is the homepage.
      </div>
    );
  }
}
