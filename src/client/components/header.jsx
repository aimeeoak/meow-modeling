import { React, useState } from 'react';

import logo from "./logo/"

const { Search } = Input;

export default function headerView(props) {
    //callSearchAPI, updateQuery, 

  return <div id="topbar">
    <div className='header-background'>
      <div>
        <img src={logo} class="logo" alt="OAR: Open Academic Research - research without paywalls Logo" />
      </div>
  
    </div>
  </div>
}