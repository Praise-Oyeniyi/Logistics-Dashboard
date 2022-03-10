import React from 'react'
import user from '../../Components/images/user.png'
import map from './../images/map.jpg'

const TrackingBox = ({closePopUp}) => {
  return (
    <div className='onsearch-outer-outer onsearch-outer-outer-tracking'>
        <div className="onsearch-outer">
            <i className="fas fa-times fa-close" onClick ={()=> closePopUp() }></i>
            <h3 className="track-head">Location Found</h3>
            <p className='track-text'>Vehicle Has Been Successfully Located</p>

            <div className="tracking-details">
                <div className="tracking-details-left">
                    <div className="vehicle-info-outer vehicle-info-outer-flex">
                        <img src={user} alt="user-img" />
                        <div>
                            <h4 className="vehicle-info-head">
                                Johnson C
                            </h4>
                            <p>Transporter</p>
                        </div>
                        <p className="view">View</p>
                    </div>

                    <div className="vehicle-info-outer">
                        <div>
                            <h4 className="vehicle-info-head">
                                Maryland, Lagos NG
                            </h4>
                            <p>Current Location</p>
                        </div>
                    </div>

                    <div className="vehicle-info-outer">
                        <div>
                            <h4 className="vehicle-info-head">
                                36 Mins
                            </h4>
                            <p>Time spent so far</p>
                        </div>
                    </div>
                </div>
                <div className="tracking-details-right">
                    <img src={map} alt="map"/>
                    <div className="map-pointer"><i className="fa fa-solid fa-circle span-three map-pointer-icon"></i></div>
                </div>
            </div>
            

            <div className="vehicle-box-info tracking-vehicle-box-info">
                <div className="vehicle-info-outer vehicle-info-outer-flex">
                    <i className="fa fa-solid fa-truck"></i>
                    <div>
                        <h4 className="vehicle-info-head">
                            ET-272-KJA
                        </h4>
                        <p>Toyota Highlander 2004</p>
                    </div>
                </div>

                <div className="vehicle-info-outer">
                    <div>
                        <h4 className="vehicle-info-head">
                            Lagos
                        </h4>
                        <p>Start Location</p>
                    </div>
                </div>

                <div className="vehicle-info-outer">
                    <div>
                        <h4 className="vehicle-info-head">
                            Ikeja
                        </h4>
                        <p>Destination</p>
                    </div>
                </div>

                <div className="vehicle-info-outer">
                    <div>
                        <h4 className="vehicle-info-head">
                            In Transit
                        </h4>
                        <p>Status</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrackingBox