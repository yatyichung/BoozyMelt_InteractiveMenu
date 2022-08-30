import React, { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import items from './components/Items';
import Categories from './components/Categories';
import Cart from './components/Cart';
import Footer from './components/Footer';


function App() {
  
  //======MENU & ITEMS======
  const [menuItems, setMenuItems] = useState(items);
  
  //=====CATEGORIES BUTTONS=====
  const itemsByCategory= (category)=>{
    /* when click on 'All' button, it will return original list */
    if(category === 'all'){
       setMenuItems(items); 
       return;
    };
    /* filter the correspond items based on the category for 'Alcoholic' and 'Non-Alcoholic' buttons */
    const newItems = items.filter((item)=> item.category === category);
    setMenuItems(newItems);
  };

  //=====VIEW HOME/CART=====
  /* set default value to true; if setView is true it will display home page, if false, it will display cart page */
  const [view, setView] = useState(true);

  //======CART======
  const [cart,setCart] = useState([]);
 
  //=====ADD TO CART=====
  /* when click on add to cart button, it will add that specific item to setCart */
  /* only allow to add one for the same item; will NOT have duplicate key/id (users are able to edit the quantity in the cart) */
  const addToCart = (menuItem)=>{
    if(cart.indexOf(menuItem) !== -1) return; 
    setCart([...cart, menuItem]);
  };   

  //=====EDIT CART=====
  /* only edit one target item using cart.indexOf(menuItem)  */
  /* replace the amount for that item */
  const editCart = (menuItem , quantity)=> {
    const indexOfItem = cart.indexOf(menuItem);
    cart[indexOfItem].amount += quantity;

    if (cart[indexOfItem].amount === 0) cart[indexOfItem].amount = 1; //the lowest quantity is 1
    setCart([...cart]);
  };

  return (
    <>
      <Header setView={setView} cartNum={cart.length}/>
      { view ? 
        <>
          <Categories itemsByCategory={itemsByCategory} />
          <Menu  addToCart={addToCart} menuItems={menuItems} />
        </> 
        : 
        <Cart cart={cart} setCart={setCart} editCart={editCart} setView={setView}/> 
      }
      <Footer />
    </>
  );
}

export default App;
