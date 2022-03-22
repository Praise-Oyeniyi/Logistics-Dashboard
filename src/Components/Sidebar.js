import { motion } from 'framer-motion'
import React from 'react'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
    return (
        <motion.div className='motion-class sidebar-holder' initial={{left:-100+'vw'}} animate={{left:0}} transition={{duration:0.5, type:'spring', stiffness:50}}> 
                <div className="sidebar-outer">
                    <NavLink to='/'><h3 className="logo">IPI<span>.</span></h3></NavLink>
                    <div className="main-menu-links">
                        <h4 className="main-menu-header">MAIN MENU</h4>

                        <NavLink to='/'><p ><i className="fa fa-solid fa-house-user"></i>Home</p></NavLink>
                        <NavLink to='/Vehicles'><p><i className="fa fa-solid fa-truck"></i>Vehicles</p></NavLink>
                        <NavLink to='/Transporters'><p><i className="fa fa-solid fa-taxi"></i>Transporters</p></NavLink>
                        <NavLink to='/Customers'><p><i className="fa fa-solid fa-user"></i>Customers</p></NavLink>
                        <NavLink to='/Shipments'><p><i className="fa fa-solid fa-ship"></i>Shipments</p></NavLink>
                    </div>
                    <div className="internal-tools">
                        <h4 className="internal-tools-header">INTERNAL TOOLS</h4>
                        <p><i className="fa fa-solid fa-life-ring"></i>Support Tickets</p>
                        <p><i className="fa fa-solid fa-receipt" ></i>Invoices</p>
                        <p><i className="fa fa-solid fa-chart-line"></i>Analytics</p>
                        <p><i className="fa fa-solid fa-credit-card"></i>Payments</p>
                        <p><i className="fa fa-solid fa-wrench"></i>Settings</p>
                    </div>
                </div>
                <div className="log-out">
                    <p>Log Out</p>
                </div>
        </motion.div>
    )
}

export default Sidebar
