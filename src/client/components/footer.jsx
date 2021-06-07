import React from 'react';
import './Footer.css';

import { Button } from 'antd';

export default function footerView() {
  return <div className='footer'>
      <Button >About</Button>
      <Button >Apply</Button>
      <Button >Contact</Button>
    </div>
}