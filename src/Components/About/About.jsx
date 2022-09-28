import React from 'react'
import './About.css'
import Ab from '../../img/ab.jpg'
import Award from '../../img/award.png'

const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
          <div className="a-card bg"></div>
            <div className="a-card">
                <img src={Ab} alt="" className="a-img" />
            </div>
            
        </div>
        
        <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          I'm a master Forex coach, a seasoned Graphics designer.
          I'm the founder of EagleFX Academy, An Academy that has raised Profitable Traders.
          I've fond balance between Life and Work, I'm a totally happy person, inspiring spseaker
          anad firm investor, but it didn't come easily.You can use my previous experience
          in order not to fall into the same trap.  
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2022</h4>
            <p className="a-award-desc">
             International Designer of the year, presented by CEO Elam Global World
             Joseph Kemisola Esther.
            </p>
          </div>
        </div>
        
        </div>

    </div>
  )
}

export default About