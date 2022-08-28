import React, {useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import items from './components/Items';
import Categories from './components/Categories';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  //======MENU & ITEMS======
  const [menuItems, setMenuItems] = useState(items);
  
  const itemsByCategory= (category)=>{
    //"All" button
    if(category === 'all'){
      setMenuItems(items); //return original list
      return;
  }

  //filter the correspond items based on the category for "Alcoholic" and "Non-Alcoholic" buttons
  const newItems= items.filter((item)=> item.category === category);
    setMenuItems(newItems);
  };


  //switch to view home/cart
  /* set default value to true, if setView is true it will display home page, if false, it will display cart */
  const [view, setView] = useState(true);

  //======CART======
  const [cart,setCart] = useState([]);

  const handleClick = (menuItem)=>{
      cart.push(menuItem);
      console.log(cart);
  }

  

  return (
    <>
      <Header setView={setView} cartNum={cart.length}/>
      { view? <><Categories itemsByCategory={itemsByCategory}/><Menu items={menuItems} handleClick={handleClick}/> </> : <Cart cart={cart} /> }
      <Footer />
    </>
  );
}

export default App;
