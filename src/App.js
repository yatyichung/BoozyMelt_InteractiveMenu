import React, { useState  } from 'react';
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
  };

  //filter the correspond items based on the category for "Alcoholic" and "Non-Alcoholic" buttons
  const newItems = items.filter((item)=> item.category === category);
     setMenuItems(newItems);
  };

  //switch to view home/cart
  /* set default value to true, if setView is true it will display home page, if false, it will display cart */
  const [view, setView] = useState(true);

  //======CART======
  const [cart,setCart] = useState([]);
 
  //=====ADD TO CART=====
  const addToCart = (menuItem)=>{
    //only allow to add one for the same item
    if(cart.indexOf(menuItem) !== -1) return;
    setCart([...cart, menuItem]);
  };   

  //=====EDIT CART=====
  const editCart = (menuItem , d)=> {
    const ind = cart.indexOf(menuItem);
    cart[ind].amount += d;

    if (cart[ind].amount === 0) cart[ind].amount = 1;
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
        <Cart cart={cart} setCart={setCart} editCart={editCart}/> 
      }
      <Footer />
    </>
  );
}

export default App;
