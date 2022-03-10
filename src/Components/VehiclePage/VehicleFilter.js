import React from 'react'
import Onsearch from './Onsearch'
import user from '../../Components/images/user.png'
import TrackingBox from './TrackingBox'

const VehicleFilter = ({closePopUp, trackingDiv, trackShipment}) => {
  return (
    <div className='Vfilter-outer'>
        <Onsearch trackingDiv={trackingDiv}/>
        <TrackingBox closePopUp={closePopUp}/>
        <div className="Vfilter-top">
            <ul className="v-filter-top-list">
                <li>All Vehicles</li>
                <li>Trucks</li>
                <li>Trailers</li>
                <li>Tankers</li>
            </ul>
            <i className="fa fa-search"></i>
        </div>
        <div className="Vfilter-bottom">
            <div className="vehicle-box-info">
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

                <div className="vehicle-info-outer vehicle-info-outer-flex">
                    <img src={user} alt="user-img" />
                    <div>
                        <h4 className="vehicle-info-head">
                            Johnson C
                        </h4>
                        <p>Transporter</p>
                    </div>
                </div>

                <div className="vehicle-info-outer vehicle-info-outer-flex">
                    <div>
                        <h4 className="vehicle-info-head vehicle-info-head-span">
                            <i className="fa fa-solid fa-circle"></i>
                            In Transit
                        </h4>
                        <p className='ts' onClick={()=>trackShipment()}>Track Shipment</p>
                    </div>
                    <div className="burger">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>



            <div className="vehicle-box-info">
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

                <div className="vehicle-info-outer vehicle-info-outer-flex">
                    <img src={user} alt="user-img" />
                    <div>
                        <h4 className="vehicle-info-head">
                            Jeremy Lopez
                        </h4>
                        <p>Transporter</p>
                    </div>
                </div>

                <div className="vehicle-info-outer vehicle-info-outer-flex">
                    <div>
                        <h4 className="vehicle-info-head vehicle-info-head-span ">
                            <i className="fa fa-solid fa-circle span-two"></i>
                            In Transit
                        </h4>
                        <p className='ts' onClick={()=>trackShipment()}>Track Shipment</p>
                    </div>
                    <div className="burger">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>



            <div className="vehicle-box-info">
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

                <div className="vehicle-info-outer vehicle-info-outer-flex">
                    <img src={user} alt="user-img" />
                    <div>
                        <h4 className="vehicle-info-head">
                            Indiana Jones
                        </h4>
                        <p>Transporter</p>
                    </div>
                </div>

                <div className="vehicle-info-outer vehicle-info-outer-flex">
                    <div>
                        <h4 className="vehicle-info-head vehicle-info-head-span ">
                            <i className="fa fa-solid fa-circle span-three"></i>
                            In Transit
                        </h4>
                        <p className='ts' onClick={()=>trackShipment()}>Track Shipment</p>
                    </div>
                    <div className="burger">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>



            <div className="vehicle-box-info">
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

                <div className="vehicle-info-outer vehicle-info-outer-flex">
                    <img src={user} alt="user-img" />
                    <div>
                        <h4 className="vehicle-info-head">
                            Johnson C
                        </h4>
                        <p>Transporter</p>
                    </div>
                </div>

                <div className="vehicle-info-outer vehicle-info-outer-flex">
                    <div>
                        <h4 className="vehicle-info-head vehicle-info-head-span ">
                            <i className="fa fa-solid fa-circle span-four"></i>
                            In Transit
                        </h4>
                        <p className='ts' onClick={()=>trackShipment()}>Track Shipment</p>
                    </div>
                    <div className="burger">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VehicleFilter