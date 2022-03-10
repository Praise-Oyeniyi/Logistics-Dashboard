import React from 'react'
import user from '../Components/images/user.png'

const UserOverview = () => {
    return (
        <div className='overview'>
            <div className="overview-top">
                <div className="overview-top-right">
                    <div className='notify-div'> 
                        <i className="fa fa-regular fa-bell"></i>
                        <div className="notification-active"></div>
                    </div>
                    <img src={user} alt='user-profile'/>
                </div>

                <div className="overview-bottom-left">
                    <h3 className="greetings">Good Evening, Micheal</h3>
                    <p className="welcome-mg">Glad to have you back, here's an overview of your operations today</p>
                </div>
            </div>


            <div className="overview-outer-bottom">
                <div className="overview-boxes-outer">
                    <div className="overview-box">
                        <h4>REGISTERED CUSTOMERS</h4>
                        <h3>380.2K</h3>
                        <h4>3467 Joined Today</h4>
                    </div>
                    <div className="overview-edge">
                        <i className="fa fa-solid fa-user"></i>
                    </div>
                </div>
                
                <div className="overview-boxes-outer">
                    <div className="overview-box">
                        <h4>REGISTERED TRANSPORTERS</h4>
                        <h3>15.6M</h3>
                        <h4>3467 Onboarded Today</h4>
                    </div>
                    <div className="overview-edge overview-edge-two">
                        <i className="fa fa-solid fa-taxi"></i>
                    </div>
                </div>

                <div className="overview-boxes-outer">
                    <div className="overview-box">
                        <h4>TOTAL SHIPMENTS</h4>
                        <h3>348.9K</h3>
                        <h4>3467 Shipped Today</h4>
                    </div>
                    <div className="overview-edge overview-edge-three">
                        <i className="fa fa-solid fa-ship"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserOverview
