import React from 'react'
import Sidebar from '../Sidebar'
import user from '../../Components/images/user.png'
import VehicleFilter from './VehicleFilter'
import { AnimatePresence, motion } from 'framer-motion'

const Vehicles = ({closePopUp, trackingDiv, trackShipment}) => {
    return (
        <motion.div className='motion-class' initial={{left:-100+'vw'}} animate={{left:0}} exit={{right:-100+'vw'}} transition={{duration:0.5}}>
                <div className='body'>
                    <Sidebar/>
                    <div className="body-container">
                        <div className="body-container-outer">
                            <div className='overview vehicles-top'>
                                <div className="overview-top vehicles-top">
                                    <div className="overview-top-right">
                                        <div className='notify-div'> 
                                            <i className="fa fa-regular fa-bell"></i>
                                            <div className="notification-active"></div>
                                        </div>
                                        <img src={user} alt='user-profile'/>
                                    </div>

                                    <div className="overview-bottom-left">
                                        <h3 className="greetings">Vehicles</h3>
                                        <p className="welcome-mg">Manage and Track All Vehicles On The IPI Network</p>
                                    </div>
                                </div>
                            </div>
                            <div className="vehicles-outer-bottom">
                                        <VehicleFilter closePopUp={closePopUp} trackingDiv={trackingDiv} trackShipment={trackShipment}/>
                            </div>
                        </div>
                    </div>
                </div>
        </motion.div>
    )
}

export default Vehicles
