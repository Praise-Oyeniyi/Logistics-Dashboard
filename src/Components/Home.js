import React from 'react'
import Sidebar from './Sidebar'
import Body from './Body'

const Home = ({lightTheme,themeSwitcher,setLightTheme,chartState, toggleActive,toggleActiveStyles}) => {
  return (
    <div className="body">
          <Sidebar/>
          <Body lightTheme={lightTheme} themeSwitcher={themeSwitcher} setLightTheme={setLightTheme} chartState={chartState} toggleActive={toggleActive} toggleActiveStyles={toggleActiveStyles}/>
      </div>
  )
}

export default Home