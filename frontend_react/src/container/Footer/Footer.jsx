import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import {AppsWrap} from '../../wrapper';
import {client} from '../../client'

import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>


      {!isFormSubmitted ? (
          <>
            <h2 className="head-text">Lets chat <span> :)</span></h2>
            <div className="app__footer-cards">
              <div className="app__footer-card ">
                <img src={images.email} alt="email" onChange={handleChangeInput} />
                <a href="alexiavetere@gmail.com" className="p-text" onChange={handleChangeInput}>alexiavetere@gmail.com</a>
              </div>
            </div>
        <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
            </div>
            <div className="app__flex">
              <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput} />
            </div>
            <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
          </div></>
      ) : (
        <>
        <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        >
        <div className='app__footer-email'>
          <h2 className="head-text" style={{color: 'var(--gray-color)'}}>
            Thank you for getting in touch!
          </h2>
        </div>
        </motion.div>
        </>
      )}
    </>
  );
};

export default AppsWrap(Footer, 'contact');