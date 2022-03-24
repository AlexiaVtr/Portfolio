import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { Link } from 'react-router-dom';

const SocialMedia = () => {
  return (
    <div className='app__social' style={{ position:'fixed', top: '40%'}}>
        <a href="https://www.linkedin.com/in/alexia-vetere-078890108/" target="_blank" rel="noopener noreferrer">
        <div>
          <BsLinkedin />
        </div>
        </a>
        <div>
        <BsGithub />
        </div>
        <div>
        <SiGmail />
        </div>
    </div>
  )
}

export default SocialMedia