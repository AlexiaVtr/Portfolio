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
        <a href="https://github.com/AlexiaVtr" target="_blank" rel="noopener noreferrer">
        <div>
        <BsGithub />
        </div>
        </a>
        <a href="mailto:alexiavetere@gmail.com" target="_blank" rel="noopener noreferrer">
        <div>
        <SiGmail />
        </div>
        </a>
    </div>
  )
}

export default SocialMedia