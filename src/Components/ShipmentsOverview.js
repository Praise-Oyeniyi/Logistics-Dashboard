import React from 'react'
import LineChart from './LineChart'
import {Chart as ChartJS} from 'chart.js/auto'

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
                <div className="chartdiv">
                    <div className="shipments-no">
                        <div className="shipments-no1">
                            <h4>SHIPMENTS</h4>
                            <h3>60,000</h3>
                        </div>
                        <div className="shipments-no1">
                            <h4>ACTIVE VEHICLES</h4>
                            <h3>237,889</h3>
                        </div>
                    </div>
                    <LineChart/>
                </div>
            </div>
        </div>
    )
}

export default ShipmentsOverview
