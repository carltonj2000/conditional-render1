import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as appActions from '../app/appActions';

// Bread crumb Link
class LinkBc extends Component {
  componentDidMount = () => {
    console.log(this.props);
    this.props.setPresentUrl(this.props.to);
  }
  onClick = () => {this.props.setPresentUrl(this.props.to)}
  render = () => (<div>
    <Link to={this.props.to} onClick={this.onClick}>{this.props.children}</Link>
  </div>);
}
const mapStateToProps = ({ appState }) => ({ ...appState });
export const LinkBcC = connect(mapStateToProps, appActions)(LinkBc);
