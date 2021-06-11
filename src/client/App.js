import React, { Component } from 'react';
import './app.css';
import headerView from './components/header';
import footerView from './components/footer'

function App() {
  return (
    <div className="App">
      <headerView />
      <banner />
      <body />
      <footerView />
    </div>
  )
}