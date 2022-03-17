import Shipments from './Components/Shipments';
import Vehicles from './Components/VehiclePage/Vehicles';
import Customers from './Components/Customers'
import Transporters from './Components/Transporters'
import { Routes, Route} from 'react-router-dom';
import React, { useState } from 'react';
import Home from './Components/Home';



function App() {
  const [lightTheme, setLightTheme] = useState(false);


  const themeSwitcher = ()=>{
    lightTheme? setLightTheme(false) : setLightTheme(true);
    
    if(lightTheme === false){
      document.documentElement.style.setProperty('--sidebar-background', '#04122E');
      document.documentElement.style.setProperty('--internal-tools-font-color', '#FFFFFF89');
      document.documentElement.style.setProperty('--logo-color', '#FFFFFF');
      document.documentElement.style.setProperty('--nav-blue', '#386CE2');
      document.documentElement.style.setProperty('--nav-font', '#FFFFFF89');
      document.documentElement.style.setProperty('--nav-list-header', '#FFFFFF89');
      document.documentElement.style.setProperty('--primary-color', '#010A1D');
      document.documentElement.style.setProperty('--logout-bg', '#E2EAFF0B');
      document.documentElement.style.setProperty('--sidebar-hover', '#00216A');
    }else{
      document.documentElement.style.setProperty('--sidebar-background', '#FFFFFF');
      document.documentElement.style.setProperty('--internal-tools-font-color', '#101010');
      document.documentElement.style.setProperty('--logo-color', '#151619');
      document.documentElement.style.setProperty('--nav-blue', '#386CE2');
      document.documentElement.style.setProperty('--nav-font', '#011B57BF');
      document.documentElement.style.setProperty('--nav-list-header', '#7A8395');
      document.documentElement.style.setProperty('--primary-color', '#F0F3F5');
      document.documentElement.style.setProperty('--logout-bg', '#011B570B');
      document.documentElement.style.setProperty('--sidebar-hover', '#386CE2');

    }
  }

  const closePopUp = ()=>{
    var divClose = document.querySelector('.onsearch-outer-outer-tracking');
    divClose.style.display = 'none';
  }
  const trackingDiv = () =>{
    var trackDivClose = document.querySelector('.onsearch-outer-outer-search');
    var divClose = document.querySelector('.onsearch-outer-outer-tracking');
    trackDivClose.style.display = 'none';
    divClose.style.display = 'block';
  }
  const trackShipment =()=>{
    var trackDivClose = document.querySelector('.onsearch-outer-outer-search');
    trackDivClose.style.display = 'block';
  }

  const [chartState, changeChartState] = useState({
    activeState: null,
    objects: [{id:1, duration: '1D', chartValue:[10, 15, 13, 55, 50, 30, 40, 60],}, {id:2, duration: '5D',chartValue:[13, 20, 30, 50, 55, 30, 40, 60],}, {id:3, duration: '1M',chartValue:[13, 20, 35, 50, 55, 35, 40, 60]}, {id:4, duration: '1Y', chartValue:[13, 20, 30, 50, 55, 55, 50, 60]}, {id:5, duration: 'Max',chartValue:[13, 20, 30, 50, 55, 40, 55, 60]}]
  })

  const toggleActive = (index) =>{
    changeChartState({...chartState, activeState: chartState.objects[index]})
  }

  const toggleActiveStyles = (index) =>{
    if(chartState.objects[index] === chartState.activeState ){
      return "chart-filter-active "
    }else{
      return ""
    }
  }


  return (
    <div className="App">  
    <Routes>
      <Route exact path='/' element={<Home lightTheme={lightTheme} themeSwitcher={themeSwitcher} setLightTheme={setLightTheme} chartState={chartState} toggleActive={toggleActive} toggleActiveStyles={toggleActiveStyles}/>}/>
      <Route path='/Vehicles' element={<Vehicles closePopUp ={closePopUp} trackingDiv={trackingDiv} trackShipment={trackShipment}/>}/>
      <Route path='/Transporters' element={<Transporters />}/>
      <Route path='/Customers' element={<Customers />}/>
      <Route path='/Shipments' element={<Shipments />}/>
    </Routes>    
    </div>
  );
}

export default App;
