import React from 'react'
import {Routes, Link} from 'react-router-dom'

const Sidebar = ({nav}) => {
    return (
        <div className='sidebar-holder'>
            <div className="sidebar-outer">
                <Link to='/Home'><h3 className="logo">IPI<span>.</span></h3></Link>
                <div className="main-menu-links">
                    <h4 className="main-menu-header">MAIN MENU</h4>



                    {nav?.objects.map((e,index)=>
                        (<Link to={'/'+e?.linked} key={index} ><p><i className={e.icon}></i>{e?.link}</p></Link>)
                    )}




                    {/* <Link to='/Home'><p className={toggleSideBarActiveeStyles({key:1})} onClick={()=>{toggleSideBarActive('1');toggleSideBarActivee('1')}}><i className="fa fa-solid fa-house-user"></i>Home</p></Link> */}
                    {/* <Link to='/Vehicles' key={'2'}><p><i className="fa fa-solid fa-truck"></i>Vehicles</p></Link>
                    <Link to='/Transporters' key={'3'}><p><i className="fa fa-solid fa-taxi"></i>Transporters</p></Link>
                    <Link to='/Customers' key={'4'}><p><i className="fa fa-solid fa-user"></i>Customers</p></Link>
                    <Link to='/Shipments'key={'5'}><p><i className="fa fa-solid fa-ship"></i>Shipments</p></Link> */}
                </div>
                <div className="internal-tools">
                    <h4 className="internal-tools-header" key={'6'}>INTERNAL TOOLS</h4>
                    <p><i className="fa fa-solid fa-life-ring" key={'7'}></i>Support Tickets</p>
                    <p><i className="fa fa-solid fa-receipt" key={'8'}></i>Invoices</p>
                    <p><i className="fa fa-solid fa-chart-line" key={'9'}></i>Analytics</p>
                    <p><i className="fa fa-solid fa-credit-card" key={'10'}></i>Payments</p>
                    <p><i className="fa fa-solid fa-wrench" key={'11'}></i>Settings</p>
                </div>
            </div>
            <div className="log-out">
                <p>Log Out</p>
            </div>
        </div>
    )
}

export default Sidebar
