import React from 'react';
import { FaGlassMartini, FaShoppingBasket } from 'react-icons/fa';

export default function Menu({ menuItems, addToCart  }) {

    return (
    <>
        <div className='container'>
            <div className='row'>
                {menuItems.map((menuItem)=>{
                    const {id, title,percentage, price, img, desc} = menuItem;
                    
                    return (
                        <div key={id} className='col-lg-6 mb-md-5 hover-box py-3'>
                            <div className='row'>
                                <div className='col-4'><img src={img} alt={title} className='item-img' /></div>
                                <div className='item-info col-8'>
                                    <h3 className='h5 pb-2 border-bottom'>{title}<span className='float-end item-price'>${price}</span></h3>                                    
                                    {percentage == null ? null : <p className='p-0 m-0'><span ><FaGlassMartini className='fa-gradient'/></span> {percentage}</p>}
                                    <p className='item-desc'>{ desc }</p>
                                    <button onClick={() => addToCart(menuItem)} className='add-to-cart px-3 py-1'><FaShoppingBasket/> Add to cart</button>
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


