import React,{useEffect, useState}from 'react'
import "./nav.css";

const Nav = () => {
    const [show,handleShow]=useState(false);
useEffect(()=>{
    window.addEventListener("scroll",()=>{
        if(window.scrollY>100){
            handleShow(true)
        }else{
            handleShow(false);

        }
    });
    return ()=>{
        window.removeEventListener("scroll",window);
    };
},[]);

  return (
    <div  className={`nav ${show && "nav_black"}`}>
    <img className='nav_logo'
  src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
  alt='Ntflix-logo'/>
  <img  className='nav_avatar'
  src='https://preview.redd.it/ty54wbejild91.jpg?auto=webp&s=218374d88a7a4185ad968e1150261e13da2ed1a2'/>
  
    </div>
  )
}

export default Nav