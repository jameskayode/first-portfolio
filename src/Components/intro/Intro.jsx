import React from 'react'
import './Intro.css'
import Me from '../../img/meaa.png'

const Intro = () => {
  return (
    <div className='i'>
      <div className='i-left'>
        <div className='i-left-wrapper'>
            <h2 className='i-intro'>Hello, My name is</h2>
            <h1 className='i-name'>Joseph James</h1>
            <div className='i-title'>
            <div className='i-title-wrapper'>
            <div className='i-title-item'>Web Developer</div>
            <div className='i-title-item'>Forex Trader</div>
            <div className='i-title-item'>Graphics Designer</div>
            <div className='i-title-item'>Project Manager</div>
            </div>
            </div>
            <p className="i-desc">
              I Design and develop services for customers of all sizes, specializing in creating stylish, modern websites and online stores.   
              </p>
        </div>
       

        </div>
      <div className='i-right'>
      <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  )
}

export default Intro
