import React from 'react';
import Testimonial from '../testimonial/Testimonial';
import {
  html,
  css,
  node,
  express,
  tailwind,
  bootstrap,
  c,
  react,
} from '../assets';

const Experience = () => {
  return (
    <div>
      <div style={{ textAlign: 'center' }} data-aos='fade-down-right'>
        <h1 style={{ color: '#754ef9', fontSize: '4rem', marginBottom: '1rem' }}>
          Experience
        </h1>
        <h2>These are Technologies I've worked with</h2>
      </div>
      <div
      className='experience'
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
        }}
      >
          <Testimonial bg='orangered'>
            <img src={html} style={{ width: '50%' }} alt='HTML' />
            <h1>HTML</h1>
          </Testimonial>
          <Testimonial bg='blue'>
            <img src={css} style={{ width: '50%' }} alt='CSS' />
            <h1>Css</h1>
          </Testimonial>
          <Testimonial bg='#0ea'>
            <img src={react} style={{ width: '50%' }} alt='React JS' />
            <h1>React JS</h1>
          </Testimonial>
          <Testimonial bg='green'>
            <img src={node} style={{ width: '50%' }} alt='Node JS' />
            <h1>Node JS</h1>
          </Testimonial>
    
       
          <Testimonial bg='purple'>
            <img src={express} style={{ width: '50%' }} alt='Express JS' />
            <h1>Express JS</h1>
          </Testimonial>
          <Testimonial bg='#0ef'>
            <img src={tailwind} style={{ width: '50%' }} alt='Tailwind' />
            <h1>Tailwind</h1>
          </Testimonial>
          <Testimonial bg=''>
            <img src={c} style={{ width: '50%' }} alt='C' />
            <h1>C</h1>
          </Testimonial>
          <Testimonial bg='#754ef9'>
            <img src={bootstrap} style={{ width: '50%' }} alt='Bootstrap' />
            <h1>Bootstrap</h1>
          </Testimonial>
        </div>
    </div>
  );
};

export default Experience;
