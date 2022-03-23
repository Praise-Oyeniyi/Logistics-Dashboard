import React,{useState} from 'react'

const NavBar = () => {
    const [nav, navActive] = useState(false);

    const navToggle = () =>{
        document.querySelector('.sidebar-holder').style.transition = '.3s ease';
        document.querySelector('.Burger').style.transition = '.3s ease';
        nav? navActive(false) : navActive(true);
        console.log(nav)
        
        if(nav == false){
            document.querySelector('.burger-1').style.cssText = 'transform:rotate(45deg) translateY(7px); width:25px; top:-.5px';
            document.querySelector('.burger-2').style.cssText = 'transform:rotate(-45deg) translateY(-7px); margin-top:3px';
            document.querySelector('.sidebar-holder').style.top = 0;
            document.querySelector('.Burger').style.position = 'fixed';
        }else{
            document.querySelector('.burger-1').style.cssText = 'transform:rotate(0deg) translateY(0); width:35px; top:0';
            document.querySelector('.burger-2').style.cssText = 'transform:rotate(0deg) translateY(0); margin-top:3px';
            document.querySelector('.sidebar-holder').style.top = -100+'vh';
            document.querySelector('.Burger').style.position = 'absolute';

        }
    }

  return (
    <div className='Burger' onClick={()=>navToggle()}>
        <div className="burger-1"></div>
        <div className="burger-2"></div>
    </div>
  )
}

export default NavBar