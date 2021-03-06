import React, { useState } from 'react';
import Onsearch from './Onsearch'
import user from '../../Components/images/user.png'
import TrackingBox from './TrackingBox'
import { VehicleData } from './VehicleFilterData'

const VehicleFilter = ({closePopUp, trackingDiv, trackShipment}) => {
    const [arr, filterArr] = useState(VehicleData)

    const filterValues = (vehicletype)=>{
       const filtered = VehicleData.filter(e => e.hasOwnProperty(vehicletype) == true)
       filterArr(filtered)
    }
    
  return (
    <div className='Vfilter-outer'>
        <Onsearch trackingDiv={trackingDiv}/>
        <TrackingBox closePopUp={closePopUp}/>
        <div className="Vfilter-top">
            <select name="Vehicle Types" className="v-filter-top-list v-filter-top-list-mobile" onClick={(e)=>filterValues(e.target.value)}>
                <option value="icon">All Vehicles</option>
                <option value="truck">Trucks</option>
                <option value="trailers" >Trailers</option>
                <option value="tankers">Tankers</option>
            </select>
            <ul className="v-filter-top-list v-filter-top-list-desktop" >
                <li onClick={()=>filterValues('icon')}>All Vehicles</li>
                <li onClick={()=>filterValues('truck')}>Trucks</li>
                <li onClick={()=>filterValues('trailers')}>Trailers</li>
                <li onClick={()=>filterValues('tankers')}>Tankers</li>
            </ul>
            <i className="fa fa-search"></i>
        </div>
        <div className="Vfilter-bottom">
            <div className='vehicle-box-info'>
                {arr.map((e)=>(
                        <div className='vehicle-box-info-slide' >
                            <div className="vehicle-info-outer vehicle-info-outer-flex">
                                <i className={e.icon}></i>
                                <div>
                                    <h4 className="vehicle-info-head">
                                        {e.vehicleId}
                                    </h4>
                                    <p>{e.vehicleInfo}</p>
                                </div>
                            </div>

                            <div className="vehicle-info-outer">
                                <div>
                                    <h4 className="vehicle-info-head">
                                        {e.location}
                                    </h4>
                                    <p>{e.locationDescription}</p>
                                </div>
                            </div>

                            <div className="vehicle-info-outer">
                                <div>
                                    <h4 className="vehicle-info-head">
                                        {e.sLocation}
                                    </h4>
                                    <p>{e.sLocationD}</p>
                                </div>
                            </div>

                            <div className="vehicle-info-outer">
                                <div>
                                    <h4 className="vehicle-info-head">
                                        {e.info}
                                    </h4>
                                    <p>{e.infoInfo}</p>
                                </div>
                            </div>

                            <div className="vehicle-info-outer vehicle-info-outer-flex">
                                <img src={user} alt="user-img" />
                                <div>
                                    <h4 className="vehicle-info-head">
                                        {e.driverName}
                                    </h4>
                                    <p>Transporter</p>
                                </div>
                            </div>

                            <div className="vehicle-info-outer vehicle-info-outer-flex">
                                <div>
                                    <h4 className="vehicle-info-head vehicle-info-head-span">
                                        <i className={e.circle}></i>
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
                ))}
            </div>
        </div>
    </div>
  )
}

export default VehicleFilter