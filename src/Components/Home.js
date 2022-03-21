import React from 'react'
import Sidebar from './Sidebar'
import Body from './Body'
import { motion } from 'framer-motion'
import NavBar from './NavBar'

const Home = ({lightTheme,themeSwitcher,setLightTheme,chartState, toggleActive,toggleActiveStyles}) => {
  return (
    <motion.div className='motion-class' initial={{left:-100+'vw'}} animate={{left:0}} transition={{duration:0.3}}>
      <div className="body">
          <NavBar/>
          <Sidebar/>
          <Body lightTheme={lightTheme} themeSwitcher={themeSwitcher} setLightTheme={setLightTheme} chartState={chartState} toggleActive={toggleActive} toggleActiveStyles={toggleActiveStyles}/>
      </div>
    </motion.div>
  )
}

export default Home