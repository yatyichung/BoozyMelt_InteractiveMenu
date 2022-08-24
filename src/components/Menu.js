import React from 'react';
import { FaGlassMartini } from 'react-icons/fa';

export default function Menu({ items }) {

  return (
    <>
        <div className='container'>
            <div className='row'>
                {items.map((menuItem)=>{
                    const {id, title,percentage, price, img, desc} = menuItem;
                    
                    return (
                        <div key={id} className='col-md-6 mb-md-5 hover-box'>
                            <div className='row'>
                                <div className='col-4'><img src={img} alt={title} className='item-img' /></div>
                                <div className='item-info col-8'>
                                    <h3 className='h4 pb-2 border-bottom'>{title}<span className='float-end item-price'>${price}</span></h3>                                    
                                    <p>
                                        {percentage == null ? null : <p><FaGlassMartini /> {percentage}</p>}
                                    </p>
                                    
                                    <p className='item-desc'>{desc}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    </>
  )
}
