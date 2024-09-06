import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1'>The Key to Find Dinning</h1>
      <p className='p__opensans' style={{margin:'2rem 0' }}>
          we are dedicated to providing a luxurious and memorable experience for every guest.
          Our world-class service is tailored to meet your every need, ensuring a stay that is both relaxing and rejuvenating.
      </p>
      <button type='button' className='custom__button'>Explore Menu</button>

    </div>

    <div className='app__wrapper_img'>
    <img src={images.welcome} alt="header img"/>

    </div>
  </div>
);

export default Header;
