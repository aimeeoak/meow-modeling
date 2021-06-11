import { React, useState } from 'react';

import logo from ".../public"

const { Search } = Input;

export default function headerView(props) {
    //callSearchAPI, updateQuery, 

  return <div id="topbar">
    <div className='header-background'>
      <div>
        <img src={logo} class="logo" alt="Meow Modeling" />
      </div>
  
    </div>
  </div>
}