import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion';

import {images} from '../../constants'
import './About.scss';
import { urlFor, client } from '../../client';


const abouts= [
{tittle: 'FrontEnd Development', description: 'I am a good developer.', imgUrl:images.about01,},
{tittle: 'Backend Development', description: 'I am a good developer.', imgUrl:images.about02,},
{tittle: 'Web Animations & Desing', description: 'I am a good developer.', imgUrl:images.about03,}
];


const About = () => {

  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) =>  setAbouts(data))
  }, [])


  return (
    <>
    <h2 className='head-text'>I know that <span>Good Development</span><br />means <span>Good Business</span>
    </h2>
    <div className='app__profiles'>
      {abouts.map((about, index) => (
        <motion.div
          whileInView={{ opacity: 1}}
          whileHover={{ scale: 1.1}}
          transition={{duration: 0.5, type: 'tween'}}
          className="app__profile-item"
          key={about.tittle + index}
          >
            <img src={about.imgUrl} alt={about.tittle} />
            <h2 className='bold-text' style={{marginTop: 20}}>{about.tittle}</h2>
            <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
        </motion.div>
      ))}
    </div>
    </>
  )
}

export default About