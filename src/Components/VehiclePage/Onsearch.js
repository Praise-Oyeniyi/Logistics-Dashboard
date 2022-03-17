import React from 'react'
import user from '../../Components/images/user.png'

const Onsearch = ({trackingDiv}) => {
  return (
    <div className='onsearch-outer-outer onsearch-outer-outer-search'>
        <div className="onsearch-outer">
            <i className="fas fa-times fa-close" onClick={()=> trackingDiv()}></i>
            <h3 className="track-head">Tracking Vehicle</h3>
            <p className='track-text'>Please hold on. Locating Vehicle on IPI Network</p>
            <div className="track-info">
                <div className="track-center">
                    <div className="vehicle-info-outer vehicle-info-outer-flex track-center-user">
                            <img src={user} alt="user-img" />
                            <div>
                                <h4 className="vehicle-info-head">
                                    Jeremy Lopez
                                </h4>
                                <p>Transporter</p>
                            </div>
                    </div>
                    <div className="lighter-bg">
                        <div className="light-bg">
                            <i className="fa fa-search search-pop"></i>
                        </div>
                    </div>
                </div>

                <div className="vehicle-box-info-slide vehicle-box-info-pop">
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
    </div>
  )
}

export default Onsearch