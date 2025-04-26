import './TopBar.css';
import React from 'react';
import gov from '../imgs/govpe.png';
import logo from '../imgs/pslogo.png';
import brasil from '../imgs/brasil.png';
import eua from '../imgs/eua.png';

const TopBar = () => {
  return (
    <div id='topbar'>
      <img src={gov} className='topimg' id='gov' alt="" />
      <img src={logo} className='topimg' id='logo' alt="" />
      <span className='langs'>
        <img src={brasil} className='topimg' alt="" />
        <img src={eua} className='topimg' alt="" />
      </span>
    </div>
  );
};

export default TopBar;