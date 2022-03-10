import React from 'react'
import ErrorPage from './ErrorPage'
import Sidebar from './Sidebar'

const Shipments = () => {
    return (
        <div>
            <div className='body'>
                <Sidebar/>
                <ErrorPage/>
            </div>
        </div>
    )
}

export default Shipments
