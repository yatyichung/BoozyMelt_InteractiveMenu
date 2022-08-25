import React, {useState} from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import items from './components/Items';
import Categories from './components/Categories';
import Footer from './components/Footer';

function App() {
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

  return (
    <>
      <Header />
      <Categories itemsByCategory={itemsByCategory}/>
      <Menu items={menuItems}/>
      <Footer />
    </>
  );
}

export default App;
