import React from 'react'
import LineChart from './LineChart'

const ShipmentsOverview = ({chartState, toggleActive, toggleActiveStyles}) => {
    return (
        <div className='shipment-overview-outer'>
            <div className="shipments-top">
                <div className="shipments-text">
                    <h3 className="shipments">Shipments</h3>
                    <p>Shipping is going pretty well today, Here's what we have</p>
                </div>

                <ul className="chart-filter">
                    {chartState.objects.map((e,index)=>(
                        <li className={toggleActiveStyles(index)} key={index} onClick={()=>{toggleActive(index)}}>{e.duration}</li>
                    ))}
                </ul>
            </div>

            <div className="chart">
                 {/* <LineChart/> */}
            </div>
        </div>
    )
}

export default ShipmentsOverview
