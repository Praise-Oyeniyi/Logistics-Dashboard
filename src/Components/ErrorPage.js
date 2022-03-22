import { faRotate } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import React from 'react'
import {Route, Link} from 'react-router-dom'
import errorHel from './images/brk-hel.png'

const ErrorPage = () => {
  return (
    <div className="body-container">
        <div className="body-container-outer body-container-outer-error">
            <div className="error-outer">
                <div className="error-text">
                    <h1 className="error404-text">
                        404
                    </h1>
                    <p className='error-plea'>Sorry, Page is Still Under Construction. . .</p>
                    <Link to='/'><p className='back-home'>Go Home</p></Link>
                </div>
                <div className="error-image">
                    <p className="error-top">Transporters <span>.... Broken link</span></p>
                    <motion.div initial={{scale:0}} animate={{scale:1}} transition={{duration:0.7}}>
                        <img src={errorHel} alt="error-page" />
                    </motion.div>
                    <p className="error-bottom"><span>Find Your Way</span>...tracked Shipment Missing</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage