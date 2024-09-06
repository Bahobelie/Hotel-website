import React from 'react';
import { images } from '../../constants';

import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt=""/>
    </div>
    <div className='app__wrapper_info'>
    <SubHeading title="Chef's Word"/>
    <h1 className='headtext__cormorant'>What we believe in </h1>

    <div className='app__chef-content'>
      <div className='app__chef-content_quote'>
        <img src={images.quote} alt='quote'/>
        <p className='p__opensans'> At Grand Hotel Name,
            we believe in the art of sophisticated elegance and timeless hospitality.
        </p>
      </div>
      <p className='p__opensans'>
          Our dedication to impeccable service ensures that every detail,
          from the grandest gesture to the smallest nuance, is thoughtfully crafted to provide an unparalleled experience.
          We are committed to excellence, ensuring that each guest feels cherished and valued throughout their stay.
      </p>
    </div>

    <div className='app__chef-sign'>
      <p>Kevin Luo</p>
      <p className='p__opensans'>Chef & Founder</p>
      <img src={images.sign} alt='sign'/>
    </div>

    </div>
  </div>
);

export default Chef;
