import React from 'react'
import { FaLightbulb } from 'react-icons/fa'
import { FaBolt } from 'react-icons/fa6'
import { FaHammer } from 'react-icons/fa'
import { FaBox } from 'react-icons/fa'
import { FaScrewdriverWrench } from 'react-icons/fa6'
import { FaKey } from 'react-icons/fa'
import './Banner.css'

const Banner = () => {
  return (
    <>
    <div className="banner">
        <div className="container">
            <div className="banner__container">
                <ul className='banner__list'>
                    <li className='banner__item'>
                        <FaLightbulb/>
                        <h1 className='banner__title'>Instant Server Start</h1>
                        <p className='banner__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, doloribus.</p>
                    </li>
                    <li className='banner__item'>
                        <FaBolt/>
                        <h1 className='banner__title'>Lightning Fast HMR</h1>
                        <p className='banner__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, consectetur!</p>
                    </li>
                    <li className='banner__item'>
                        <FaHammer/>
                        <h1 className='banner__title'>Rich Features</h1>
                        <p className='banner__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, facilis.</p>
                    </li>
                    <li className='banner__item'>
                        <FaBox/>
                        <h1 className='banner__title'>Optimized Build</h1>
                        <p className='banner__text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, facere!</p>
                    </li>
                    <li className='banner__item'>
                        <FaScrewdriverWrench/>
                        <h1 className='banner__title'>Universal Plugins</h1>
                        <p className='banner__text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, tempora!</p>
                    </li>
                    <li className='banner__item'>
                        <FaKey/>
                        <h1 className='banner__title'>Fully Typed APIs</h1>
                        <p className='banner__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, beatae.</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner