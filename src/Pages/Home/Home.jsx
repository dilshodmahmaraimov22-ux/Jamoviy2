import React from 'react'
import Five from './five.svg'
import Six from './six.svg'
import Seven from './seven.svg'
import Egihit from './eghit.svg'
import Nine from './nine.svg'
import Ten from './ten.svg'
import './Home.css'

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container'>
          <div className='home-container'>
            <ul className='home-list'>
              <li className='home-item'>
                <h1 className='home-title'>Flowers, 🌻
                  what the world
                  needs </h1>
                  <p className='home-text'>Browse between hounders of flowers</p>
                  <button className='home-btn'><a className='home-link' href="#">Browse</a></button>
              </li>
              <li className='home-item-two'>
                 <img src={Six} alt="" />
                 <img src={Seven} alt="" />
                 <img src={Egihit} alt="" />
                 <img src={Nine} alt="" />
                 <img src={Ten} alt="" />
                 <img src={Five} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home