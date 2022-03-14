import React, {useState, useEffect} from 'react'

import './About.scss';

const abouts= [
{tittle: 'Web Development', description: 'I am a good developer'}
];

const About = () => {
  return (
    <>
    <h2 className='head-text'>
      I know that
      <span>Good Desing</span>
      <br />
      means
      <span>Good Business</span>
    </h2>
    <div className='app_profiles'>

    </div>
    </>
  )
}

export default About