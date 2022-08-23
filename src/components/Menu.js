import React from 'react';

export default function Menu({ items }) {
  return (
    <>
        <div className='container'>
            <div className='row'>
                {items.map((menuItem)=>{
                    const {id, title,percentage, price, img, desc} = menuItem;
                    return (
                        <div key={id} className='col-md-6 mb-md-5'>
                            <div className='row'>
                                <div className='col-4'><img src={img} alt={title} className='item-img' /></div>
                                <div className='item-info col-8'>
                                    <h3>{title}</h3>
                                    <p>{percentage} CAD ${price}</p>
                                    <p>{desc}</p>
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
