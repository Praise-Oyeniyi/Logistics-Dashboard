import { motion } from 'framer-motion'
import React from 'react'
import ErrorPage from './ErrorPage'
import Sidebar from './Sidebar'


const Customers = () => {
    return (
        <motion.div className='motion-class' initial={{left:-100+'vw'}} animate={{left:0}}  transition={{duration:0.5}}>
            <div>
                <div className='body'>
                    <Sidebar/>
                    <ErrorPage/>
                </div>
            </div>
        </motion.div>
    )
}

export default Customers
