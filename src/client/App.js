import React, { Component } from 'react';
import './app.css';
import headerView from './components/header';
import footerView from './components/footer'

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    headerView;
    footerView;
}
