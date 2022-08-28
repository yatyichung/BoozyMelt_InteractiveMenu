import React, {useState, useEffect} from 'react';
import { FaGlassMartini,  FaTrash} from 'react-icons/fa';


export default function Cart( {cart , setCart} ) {

  //=====REMOVE ITEM=====
  /* pass in the selected id, filter out and keep the one that is not selected then update the cart */
  const removeItem = (id) => {
    const itemRemoved = cart.filter((menuItem) => menuItem.id !== id );
    setCart(itemRemoved);
    countTotal();
  };

  //=====FINAL PRICE=====
  const [total, setTotal] = useState(0);

  const countTotal = () => {
    let finalPrice = 0;
    cart.map((menuItem) => (finalPrice += menuItem.price));
    setTotal(finalPrice);
  };

  useEffect(()=>{
    countTotal();
  })

  return (
    <>
        <div className='container'>
            <div className='text-center mt-3'>
              {cart.length === 0 ? <><img src='./images/emptycart.png' alt='empty cart vector' id="emptycart-img" /><h2>Your cart is empty.</h2><p>You have no items in your shopping cart. Let's go buy something!</p></> : null}
            </div>
            <div className='row my-3'>
              {cart.map((menuItem)=>{
              
                const {id, title,percentage, price, img, desc} = menuItem;

                  return(
                      <div className='col-12 g-4' key={id} >
                        <div className='row'>
                          <div className='col-6 col-md-2'>
                            <img src={img} alt={title} className='cart-item-img' />
                          </div>
                          <div className='col-6 col-md-10 py-md-4 '>
                            <h3 className='border-bottom'>{title}<span className='h5 float-end item-price'>${price}</span></h3>
                            <>
                                {percentage == null ? null : <p><span ><FaGlassMartini className='fa-gradient'/></span> {percentage}</p>}
                            </>  
                            <p className='cart-item-desc'>{desc}</p>
                            <button onClick={() => removeItem(id)}><FaTrash/> Remove</button>
                          </div>
                        </div>
                      </div>  
                  );
              })}
            </div>
            <div id='cart-total' className='m-2 m-md-5'>
            {cart.length ===0 ? null : <><h2 > Your total is <span className='float-end item-price'>${total}</span></h2></>}    
            </div>
        </div>
    </>
  )
}
