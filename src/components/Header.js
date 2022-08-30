import React from 'react';
import { FaCartPlus } from 'react-icons/fa';


export default function Header( { setView , cartNum } ) {




  return (
    <>
      <div className='mt-5 mb-2 text-center px-2'>
        <h1 className='d-inline-block' id='home-logo' onClick={()=>setView(true)}><span><img src='./images/logo.png' width='90' alt='' /></span>Our Menu</h1>
        <div className='d-inline-block float-end' id='cart-section' onClick={()=>setView(false)}>
          <span id="cart" ><FaCartPlus /></span>
          <span id='cart-item-num'>{ cartNum }</span> 
         </div>
      </div>
      <div className='gradient-line text-center m-auto'></div>
    </>
  )
}
