import React from 'react'
import ShipmentsOverview from './ShipmentsOverview'
import UserOverview from './UserOverview'

const Body = ({themeSwitcher, lightTheme, chartState, toggleActive, toggleActiveStyles}) => {
    return (
        <div className="body-container">
            <div className="body-container-outer">
                <UserOverview/>
                <ShipmentsOverview chartState={chartState} toggleActive={toggleActive} toggleActiveStyles={toggleActiveStyles}/>
            </div>
            <div className="theme-selector">
                <div className={lightTheme?'light' :'light theme-Cbg'} onClick={()=>{lightTheme?themeSwitcher(): console.log()}}>
                    <i className="fas fa-sun"></i>
                </div>
                <div className={lightTheme? 'dark  theme-Cbg': 'dark'} onClick={lightTheme? console.log() :()=>themeSwitcher()}>
                    <i className="fas fa-moon"></i>
                </div>
            </div>
        </div>
    )
}

export default Body
